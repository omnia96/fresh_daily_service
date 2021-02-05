import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {LoginRequestBody} from "./auth/login-request-body";
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {Public} from "./auth/set-meta-data";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Roles} from "./core/decorators/roles.decorator";
import {Role} from "./core/enums/role.enum";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginRequestBody: LoginRequestBody, @Request() request) {
    return this.authService.login(request.user);
  }
  @ApiBearerAuth()
  @Roles(Role.Admin)
  @Post('auth/join')
  async registration(@Body() loginRequestBody: LoginRequestBody) {
    return this.authService.join(loginRequestBody.username, loginRequestBody.password)
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
