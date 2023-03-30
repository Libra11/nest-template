/*
 * @Author: Libra
 * @Date: 2023-03-30 10:31:14
 * @LastEditors: Libra
 * @Description:
 * @FilePath: /back-end-temp/src/database/database.module.ts
 */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get(
          'DATABASE_HOST',
        )}:${configService.get('DATABASE_PORT')}/`,
        pass: configService.get('DATABASE_PASSWORD'),
        user: configService.get('DATABASE_USER'),
        dbName: configService.get('DATABASE_NAME'),
      }),
    }),
  ],
})
export class DatabaseModule {}
console.log(process.env);
