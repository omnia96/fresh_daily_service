import { Injectable } from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user";
import {LoginPayload} from "./login-payload";

@Injectable()
export class AuthService {
  constructor(
      private userService: UserService,
      private jwtService: JwtService
  ) {}
  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username)
    if (user && user.password === pass) {
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
}
