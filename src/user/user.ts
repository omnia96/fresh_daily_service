import {Role} from "../core/enums/role.enum";

export class User {
  id: number;
  username: string;
  password: string;
  roles: Role[] = [];
}
