/*
 * @Author: Libra
 * @Date: 2023-04-03 11:33:25
 * @LastEditTime: 2023-04-03 11:44:03
 * @LastEditors: Libra
 * @Description: http exception filter
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  LoggerService,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: LoggerService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    this.logger.error(exception.message, exception.stack);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message || exception.name,
    });
  }
}
