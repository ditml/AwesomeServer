import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';

import { ChatInput, ChatType } from './dto/create-chat.dto';
import { ChatService } from './chat.service';

@Resolver((of) => ChatType)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Query((returns) => [ChatType])
  async chats(): Promise<ChatType[]> {
    return this.chatService.findAll();
  }

  @Query((returns) => String)
  async hello(): Promise<string> {
    return 'Say Hello';
  }

  @Mutation((returns) => ChatType)
  async createChat(@Args('input') input: ChatInput): Promise<ChatType> {
    return this.chatService.create(input);
  }

  @Mutation((returns) => ChatType)
  async updateChat(
    @Args('id') id: string,
    @Args('input') input: ChatInput,
  ): Promise<ChatType> {
    return this.chatService.update(id, input);
  }

  @Mutation((returns) => ChatType)
  async deleteChat(@Args('id') id: string): Promise<ChatType> {
    return this.chatService.delete(id);
  }
}
