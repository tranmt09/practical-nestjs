import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '@/features/user/user.module';
import { LoggerModule } from '@/infra/logger';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const infrastructureModules = [LoggerModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    ...infrastructureModules,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
