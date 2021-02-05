import { Injectable } from '@nestjs/common';
import {User} from "./user";
import {Role} from "../core/enums/role.enum";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private userRepository: Repository<UserEntity>,
  ) {}
  private readonly users: User[] = [
    {id: 1, username: 'admin', password: 'qmAHdJ2p', roles: [Role.Admin]},
    {id: 2, username: 'user', password: '123456', roles: [Role.User]},
    {id: 3, username: 'maria', password: 'guess', roles: []},
  ];
  async findOne(username: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({username: username})
  }
  async create(username: string, password: string): Promise<UserEntity> {
    const userEntity = new UserEntity()
    userEntity.username = username;
    userEntity.password = password;
    return await this.userRepository.save(userEntity);
  }
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find()
  }
}
