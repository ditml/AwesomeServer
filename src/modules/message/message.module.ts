import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MsgSchema } from './message.schema';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Message',
        schema: MsgSchema,
      },
    ]),
  ],
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
