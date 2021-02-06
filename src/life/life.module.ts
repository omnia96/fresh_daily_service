import { Module } from '@nestjs/common';
import { LifeController } from './life.controller';
import { HomeController } from './home/home.controller';
import { CategoryController } from './category/category.controller';

@Module({
  controllers: [LifeController, HomeController, CategoryController],
})
export class LifeModule {}
