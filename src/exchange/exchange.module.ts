import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exchange, ExchangeSchema } from 'src/common/schema/exchange.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Exchange.name,
        schema: ExchangeSchema,
      },
    ]),
  ],
  providers: [ExchangeService],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
