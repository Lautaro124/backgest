import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateExchangeDto } from './dto/exchange.dto';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Post()
  createExchange(@Body() data: CreateExchangeDto) {
    return this.exchangeService.createExchange(data);
  }

  @Get()
  getExchanges() {
    return this.exchangeService.getExchanges();
  }
}
