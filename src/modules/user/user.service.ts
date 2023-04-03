/*
 * @Author: Libra
 * @Date: 2023-03-29 15:27:19
 * @LastEditTime: 2023-04-03 14:28:08
 * @LastEditors: Libra
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../database/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updateUser(user: User): Promise<User> {
    return this.userModel.findOneAndUpdate({ email: user.email }, user).exec();
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
