import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {IS_PUBLIC_KEY} from "./set-meta-data";
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [
            context.getHandler(),
            context.getClass()
        ]
    )
    console.log(`JwtAuthGuard.canActivate -> isPublic:${isPublic}`)
    if (isPublic) {
      return true;
    }
    return super.canActivate(context)
  }
  handleRequest(err, user, info) {
    console.log(`JwtAuthGuard.handleRequest -> err:${JSON.stringify(err)}`)
    console.log(`JwtAuthGuard.handleRequest -> user:${JSON.stringify(user)}`)
    console.log(`JwtAuthGuard.handleRequest -> info:${JSON.stringify(info)}`)
    if (err || !user) {
      throw err || new UnauthorizedException()
    }
    return user;
  }
}
