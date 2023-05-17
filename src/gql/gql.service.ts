import { Injectable } from '@nestjs/common';
import { CreateGqlInput } from './dto/create-gql.input';
import { UpdateGqlInput } from './dto/update-gql.input';

@Injectable()
export class GqlService {
  create(createGqlInput: CreateGqlInput) {
    return 'This action adds a new gql';
  }

  findAll() {
    return [{ name: 'Product', price: 20 }];
  }

  findOne(id: number) {
    return `This action returns a #${id} gql`;
  }

  update(id: number, updateGqlInput: UpdateGqlInput) {
    return `This action updates a #${id} gql`;
  }

  remove(id: number) {
    return `This action removes a #${id} gql`;
  }
}
