import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => Int)
  readonly user_id: number;

  @Field()
  readonly user_name: string;

  @Field(() => Int)
  readonly mobile: number;

  @Field()
  readonly email: string;
}
