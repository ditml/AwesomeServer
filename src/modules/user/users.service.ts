import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './users.input';
import { UserType } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: UserInput): Promise<UserType> {
    const createdUser = new this.userModel(createUserDto);
    return (await createdUser.save()) as any;
  }
  async findAll(): Promise<UserType[]> {
    return await this.userModel.find().exec();
  }
  async findOne(id: string): Promise<UserType> {
    return await this.userModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<UserType> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: UserInput): Promise<UserType> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
