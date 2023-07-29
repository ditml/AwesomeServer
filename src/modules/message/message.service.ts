import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MsgType, MsgInput } from './dto/create-msg.dto';
import { Message } from './message.interface';

@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private msgModel: Model<Message>) {}

  async create(createMsgDto: MsgInput): Promise<MsgType> {
    const createdMsg = new this.msgModel(createMsgDto);
    return (await createdMsg.save()) as any;
  }
  async findAll(): Promise<MsgType[]> {
    return await this.msgModel.find().exec();
  }
  async findOne(id: string): Promise<MsgType> {
    return await this.msgModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<MsgType> {
    return await this.msgModel.findByIdAndRemove(id);
  }

  async update(id: string, msg: MsgInput): Promise<MsgType> {
    return await this.msgModel.findByIdAndUpdate(id, msg, { new: true });
  }
}
