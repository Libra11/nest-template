import { Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/database/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async createUser() {
    const user: User = {
      username: 'Libra',
      email: 'libra085925@gmail.com',
      password: 'lixin521',
    };
    return this.userService.createUser(user);
  }
  @Get('findAll')
  async findAll() {
    console.log(this.userService.findAll());
    return this.userService.findAll();
  }
}
