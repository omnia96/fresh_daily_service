import {ApiProperty} from "@nestjs/swagger";

export class LoginRequestBody {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
