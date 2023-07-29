import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { ChatSchema } from './chat.schema';

import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Chat',
        schema: ChatSchema,
      },
    ]),
  ],
  providers: [ChatService, ChatResolver],
})
export class ChatModule {}
