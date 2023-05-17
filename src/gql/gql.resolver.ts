import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlService } from './gql.service';
import { CreateGqlInput } from './dto/create-gql.input';
import { UpdateGqlInput } from './dto/update-gql.input';

@Resolver('Gql')
export class GqlResolver {
  constructor(private readonly gqlService: GqlService) {}

  @Mutation('createGql')
  create(@Args('createGqlInput') createGqlInput: CreateGqlInput) {
    return this.gqlService.create(createGqlInput);
  }

  @Query('gql')
  findAll() {
    return this.gqlService.findAll();
  }

  @Query('gql')
  findOne(@Args('id') id: number) {
    return this.gqlService.findOne(id);
  }

  @Mutation('updateGql')
  update(@Args('updateGqlInput') updateGqlInput: UpdateGqlInput) {
    return this.gqlService.update(updateGqlInput.id, updateGqlInput);
  }

  @Mutation('removeGql')
  remove(@Args('id') id: number) {
    return this.gqlService.remove(id);
  }
}
