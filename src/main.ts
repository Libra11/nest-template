/*
 * @Author: Libra
 * @Date: 2022-12-22 14:54:33
 * @LastEditTime: 2023-04-03 11:42:27
 * @LastEditors: Libra
 * @Description: main.ts
 */
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const logger = app.get(Logger);
  app.useLogger(logger);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter(logger));
  console.log('http://localhost:3001/api');
  await app.listen(3001);
}
bootstrap();
