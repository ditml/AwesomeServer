import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class UserType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field(() => Int)
  @IsNumber()
  readonly user_id: number;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly user_name: string;
  @Field(() => Int)
  @IsNumber()
  readonly mobile: number;
  @Field()
  @IsString()
  readonly email: string;
}
