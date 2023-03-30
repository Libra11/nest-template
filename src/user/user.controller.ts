import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}
  @Get('login')
  login(): any {
    const db = this.configService.get(ConfigEnum.DB);
    console.log(db);
    return this.userService.login();
  }
}
