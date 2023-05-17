import { CreateGqlInput } from './create-gql.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGqlInput extends PartialType(CreateGqlInput) {
  id: number;
}
