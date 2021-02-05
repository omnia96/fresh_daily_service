import { Injectable } from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user";
import {LoginPayload} from "./login-payload";
import {createCipheriv, createDecipheriv, randomBytes, scrypt} from "crypto";
import {promisify} from "util";

@Injectable()
export class AuthService {
  private iv = Buffer.alloc(16)  // 或者使用动态(需保存) iv = randomBytes(16)
  private pass = "pass used to generate key"
  constructor(
      private userService: UserService,
      private jwtService: JwtService
  ) {}
  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username)
    const encryptionString = await this.encryption(pass)
    const userPassword = await this.decrypted(user.password)
    if (user && userPassword === pass) {
      const {password, ...result} = user
      console.log(`AuthService.validateUser -> result:${JSON.stringify(result)}`);
      return result;
    }
    return null;
  }
  async login(user: Omit<User, "password">) {
    console.log( `AuthService.login -> user:${JSON.stringify(user)}`)
    const payload: LoginPayload = {sub: user.id, ...user}
    delete payload['id']
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async encryption(password: string): Promise<string> {
    const key = (await promisify(scrypt)(this.pass, 'salt', 32)) as Buffer
    const cipher = createCipheriv("aes-256-ctr", key, this.iv)
    const encryptedText = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]);
    return encryptedText.toString('base64');
  }
  async decrypted(encryptedString: string): Promise<string> {
    const encryptedText = Buffer.from(encryptedString, "base64");
    const key = (await promisify(scrypt)(this.pass, 'salt', 32)) as Buffer
    const decipher = createDecipheriv('aes-256-ctr', key, this.iv);
    const decryptedText = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);
    return decryptedText.toString();
  }

  async join(username: string, password: string) {
    const passwordEncryption = await this.encryption(password)
    return this.userService.create(username, passwordEncryption)
  }
}
