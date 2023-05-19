import { IsNotEmpty, Length } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: 'The cat should have a id' })
  @Length(3, 255)
  id: number;

  @IsNotEmpty({ message: 'The cat should have a name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'Age cannot be emtpy' })
  @Length(3)
  age: number;
}
