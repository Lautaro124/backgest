import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/manage'),
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
