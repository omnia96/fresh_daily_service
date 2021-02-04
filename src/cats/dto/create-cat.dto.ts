import { IsInt, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateCatDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsInt()
  @ApiProperty()
  age: number;

  @IsString()
  @ApiProperty()
  breed: string;
}
