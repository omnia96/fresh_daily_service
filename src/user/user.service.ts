import { Injectable } from '@nestjs/common';
import {User} from "./user";
import {Role} from "../core/enums/role.enum";

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {id: 1, username: 'admin', password: '123456', roles: [Role.Admin]},
    {id: 2, username: 'user', password: '123456', roles: [Role.User]},
    {id: 3, username: 'maria', password: 'guess', roles: []},
  ];
  async findOne(username: string): Promise<User| undefined> {
    return this.users.find(user => user.username === username);
  }
}
