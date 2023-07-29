import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class MsgType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  readonly msg_id: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly msg_type: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  readonly from_id: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  readonly to_id: string;

  @Field()
  @IsString()
  readonly body: string;
}

@InputType()
export class MsgInput {
  @Field(() => Int)
  readonly msg_id: string;

  @Field()
  readonly msg_type: string;

  @Field(() => Int)
  readonly from_id: string;

  @Field(() => Int)
  readonly to_id: string;

  @Field()
  readonly body: string;
}
