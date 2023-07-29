import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';

import { MsgInput, MsgType } from './dto/create-msg.dto';
import { MessageService } from './message.service';

@Resolver((of) => MsgType)
export class MessageResolver {
  constructor(private readonly msgService: MessageService) {}

  @Query((returns) => [MsgType])
  async messages(): Promise<MsgType[]> {
    return this.msgService.findAll();
  }

  // @Query((returns) => String)
  // async hello(): Promise<string> {
  //   return 'Say Hello';
  // }

  @Mutation((returns) => MsgType)
  async createMsg(@Args('input') input: MsgInput): Promise<MsgType> {
    return this.msgService.create(input);
  }

  @Mutation((returns) => MsgType)
  async updateMsg(
    @Args('id') id: string,
    @Args('input') input: MsgInput,
  ): Promise<MsgType> {
    return this.msgService.update(id, input);
  }

  @Mutation((returns) => MsgType)
  async deleteMsg(@Args('id') id: string): Promise<MsgType> {
    return this.msgService.delete(id);
  }
}
