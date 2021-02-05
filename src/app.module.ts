import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import {APP_FILTER, APP_GUARD} from '@nestjs/core';
import { AllExceptionsFilter } from './core/filters/allExceptions.filter';
import { LifeModule } from './life/life.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {RolesGuard} from "./roles/roles.guard";

@Module({
  imports: [CatsModule, LifeModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
