import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {id: 1, username: 'admin', password: '123456'},
    {id: 2, username: 'maria', password: 'guess'},
  ];
  async findOne(username: string): Promise<User| undefined> {
    return this.users.find(user => user.username === username);
  }
}
