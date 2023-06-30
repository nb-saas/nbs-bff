import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './modules/login/login.module';
import { OpenApiModule } from './modules/open-api/open-api.module';

@Module({
  imports: [LoginModule, OpenApiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
