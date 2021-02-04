import {Controller, Get, Post, UseGuards, Request, Body, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {LoginRequestBody} from "./auth/login-request-body";
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtStrategy} from "./auth/jwt.strategy";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {Public} from "./auth/set-meta-data";
import {request} from "express";
import {ApiBearerAuth} from "@nestjs/swagger";

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
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
