import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
// import { QuizModule } from './modules/quiz/quiz.module';

import { Product, ProductSchema } from './schemas/product.schema';
import { ProductModule } from './modules/products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ProductModule,
    CatsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
