import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './modules/login/login.module';
import { OpenApiModule } from './modules/open-api/open-api.module';
import { RedisModule } from './modules/redis/redis.module';

@Module({
  imports: [LoginModule, OpenApiModule, RedisModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
