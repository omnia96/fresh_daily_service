import {User} from "../user/user";
import {Role} from "../core/enums/role.enum";

export class LoginPayload implements Omit<User, "password"|"id">{
  roles: Role[];
  username: string;
  sub: number;
}
