import { Module } from '@nestjs/common';
import { GqlService } from './gql.service';
import { GqlResolver } from './gql.resolver';

@Module({
  providers: [GqlResolver, GqlService]
})
export class GqlModule {}
