/*
 * @Author: Libra
 * @Date: 2023-03-30 10:31:31
 * @LastEditors: Libra
 * @Description:
 * @FilePath: /back-end-temp/src/database/schemas/user.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
