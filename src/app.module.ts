import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './modules/item/item.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), './src/schema.gql'),
      sortSchema: true,
    }),
    ItemsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MessageModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
