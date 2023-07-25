import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemSchema } from './items.schema';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Item',
        schema: ItemSchema,
      },
    ]),
  ],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule {}

/* https://www.youtube.com/watch?v=YdOB9a3QlWI&ab_channel=Codewithtkssharma */
