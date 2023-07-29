import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ChatType, ChatInput } from './dto/create-chat.dto';
import { Chat } from './chat.interface';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private chatModel: Model<Chat>) {}

  async create(createChatDto: ChatInput): Promise<ChatType> {
    const createdChat = new this.chatModel(createChatDto);
    return (await createdChat.save()) as any;
  }
  async findAll(): Promise<ChatType[]> {
    return await this.chatModel.find().exec();
  }
  async findOne(id: string): Promise<ChatType> {
    return await this.chatModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<ChatType> {
    return await this.chatModel.findByIdAndRemove(id);
  }

  async update(id: string, chat: ChatInput): Promise<ChatType> {
    return await this.chatModel.findByIdAndUpdate(id, chat, { new: true });
  }
}
