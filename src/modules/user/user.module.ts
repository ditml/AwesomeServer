import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserSchema } from './users.schema';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
