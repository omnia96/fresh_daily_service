import {Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters,} from '@nestjs/common';
import {Cat} from './interface/cat.interface';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {ForbiddenException} from '../core/exceptions/forbidden.exception';
import {HttpExceptionFilter} from '../core/filters/httpException.filter';
import {ValidationPipe} from '../core/pipes/validation.pipe';
import {Roles} from "../core/decorators/roles.decorator";
import {Role} from "../core/enums/role.enum";
import {ApiBearerAuth} from "@nestjs/swagger";

@ApiBearerAuth()
@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    return this.catsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
