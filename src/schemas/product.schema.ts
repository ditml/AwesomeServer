import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

export type ProductDocument = Product & MongooseDocument;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  manufacturer: string;

  @Prop()
  manufactureYear: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
