import { Role } from "src/core/enums/role.enum";
import {User} from "./user";

export class UserResponse implements Omit<User, 'password'> {
    id: number;
    username: string;
    roles: Role[];
}
