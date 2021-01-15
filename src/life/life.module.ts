import { Module } from '@nestjs/common';
import { LifeController } from './life.controller';
import { HomeController } from './home/home.controller';

@Module({
  controllers: [LifeController, HomeController],
})
export class LifeModule {}
