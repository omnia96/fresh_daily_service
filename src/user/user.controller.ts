import {Body, Controller, Get, Post} from '@nestjs/common';
import {Roles} from "../core/decorators/roles.decorator";
import {Role} from "../core/enums/role.enum";
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";
import {ApiBearerAuth} from "@nestjs/swagger";

@Controller('user')
export class UserController {
  constructor(
      private userService: UserService,
  ) {}
  @ApiBearerAuth()
  @Roles(Role.Admin)
  @Get()
  users(): Promise<UserEntity[]> {
    return this.userService.findAll()
  }
}
