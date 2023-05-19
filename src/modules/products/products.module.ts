import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { Product, ProductSchema } from '../../schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
