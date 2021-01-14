import { Module } from '@nestjs/common';
import { LifeController } from './life.controller';

@Module({
  controllers: [LifeController],
})
export class LifeModule {}
