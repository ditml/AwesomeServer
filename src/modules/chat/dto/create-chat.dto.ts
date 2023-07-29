import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';
@ObjectType()
export class ChatType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  readonly chat_id: number;

  @Field({ nullable: true })
  @IsString()
  readonly title?: string;

  @Field(() => [Int])
  // @IsNumber()
  @IsArray()
  @IsNotEmpty()
  readonly members: number[];

  @Field(() => [String], { nullable: true })
  // @IsString()
  @IsArray()
  readonly messages?: string[];
}

@InputType()
export class ChatInput {
  @Field(() => Int)
  readonly chat_id?: number;

  @Field({ nullable: true })
  readonly title?: string;

  @Field(() => [Int])
  readonly members?: number[];

  @Field(() => [String], { nullable: true })
  readonly messages?: string[];
}
