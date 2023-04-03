/*
 * @Author: Libra
 * @Date: 2022-12-22 14:54:33
 * @LastEditTime: 2023-04-03 13:54:41
 * @LastEditors: Libra
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { LogsModule } from './logs/logs.module';
import { ConfigModules } from './config/config.module';

@Module({
  imports: [DatabaseModule, UserModule, LogsModule, ConfigModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
