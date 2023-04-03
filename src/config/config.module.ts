/*
 * @Author: Libra
 * @Date: 2023-04-03 13:53:08
 * @LastEditTime: 2023-04-03 13:53:40
 * @LastEditors: Libra
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
      isGlobal: true,
    }),
  ],
})
export class ConfigModules {}
