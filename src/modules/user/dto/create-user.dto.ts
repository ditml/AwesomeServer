import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class UserType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Field(() => Int)
  @IsNumber()
  readonly phone: number;
  //   @Field()
  //   @IsString()
  //   readonly description: string;
}
