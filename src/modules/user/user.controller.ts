/*
 * @Author: Libra
 * @Date: 2023-03-29 15:22:59
 * @LastEditTime: 2023-04-03 14:29:53
 * @LastEditors: Libra
 * @Description: user.controller.ts
 */
import { Controller, Delete, Get, Logger, Patch, Post } from '@nestjs/common';
import { User } from 'src/database/schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async findUserById(id: string) {
    return this.userService.findUserById(id);
  }
  @Post()
  async createUser() {
    const user: User = {
      username: 'Libra',
      email: 'libra085925@gmail.com',
      password: 'lixin521',
    };
    return this.userService.createUser(user);
  }
  @Get()
  async findAll() {
    return this.userService.findAll();
  }
  @Patch('/:id')
  async updateUser() {
    const user: User = {
      username: 'Libra',
      email: 'Libra@qq.com',
      password: 'lixin521',
    };
    return this.userService.updateUser(user);
  }

  @Delete('/:id')
  async deleteUser(id: string) {
    return this.userService.deleteUser(id);
  }
}
