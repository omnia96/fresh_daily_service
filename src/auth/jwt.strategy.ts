import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";
import {jwtConstants} from "./constants";
import {LoginPayload} from "./login-payload";
import {UserResponse} from "../user/user-response";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    });
  }
  async validate(payload: LoginPayload) {
    console.log(`JwtStrategy.validate -> payload:${JSON.stringify(payload)}`)
    const user = new UserResponse()
    user.id = payload.sub
    Object.assign(user, payload)
    delete user['sub']
    delete user['iat']
    delete user['exp']
    return user
  }
}
