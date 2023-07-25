import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './users.input';
import { UsersService } from './users.service';

@Resolver((of) => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => [UserType])
  async users(): Promise<UserType[]> {
    return this.usersService.findAll();
  }

  @Query((returns) => String)
  async hello(): Promise<string> {
    return 'Say Hello';
  }

  @Mutation((returns) => UserType)
  async createUser(@Args('input') input: UserInput): Promise<UserType> {
    return this.usersService.create(input);
  }

  @Mutation((returns) => UserType)
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UserInput,
  ): Promise<UserType> {
    return this.usersService.update(id, input);
  }

  @Mutation((returns) => UserType)
  async deleteUser(@Args('id') id: string): Promise<UserType> {
    return this.usersService.delete(id);
  }
}
