import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exchange } from 'src/common/schema/exchange.schema';
import { CreateExchangeDto } from './dto/exchange.dto';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectModel(Exchange.name)
    private readonly exchangeModel: Model<Exchange>,
  ) {}

  async createExchange(data: CreateExchangeDto) {
    const exchange = new this.exchangeModel(data);
    return exchange.save();
  }

  async getExchanges() {
    return this.exchangeModel.find().exec();
  }
}
