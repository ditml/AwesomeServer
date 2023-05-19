import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../../schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

const catProjection = {
  __v: false,
  _id: false,
};

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  public async getAllCats() {
    const cats = await this.catModel.find({}, catProjection).exec();

    if (!cats || !cats[0]) {
      throw new HttpException('Not found', 404);
    }

    return cats;
  }

  public async getCatById(id: number): Promise<any> {
    const cats = await this.catModel.findOne({ id }, catProjection).exec();

    if (!cats) {
      throw new HttpException('Not found', 404);
    }

    return cats;
  }

  public async deleteCatById(id: number): Promise<any> {
    const cats = await this.catModel.deleteOne({ id }).exec();

    if (cats.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }

    return cats;
  }

  public async putCatById(id: number, cat: Cat): Promise<any> {
    const cats = await this.catModel
      .findOneAndUpdate({ id }, cat, { new: true })
      .exec();

    if (!cats) {
      throw new HttpException('Not found', 404);
    }

    return cats;
  }

  async update(id, Cat: Cat): Promise<any> {
    return await this.catModel.findByIdAndUpdate(id, Cat, {
      name: true,
    });
  }

  public async postCat(Cat: CreateCatDto) {
    const cat = await new this.catModel(Cat);
    return cat.save();
  }
}
