import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/crateAccount.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() newAccount: CreateAccountDto) {
    return this.accountService.create(newAccount);
  }

  @Get(':dni')
  async findByDni(@Param('dni') dni: string) {
    return this.accountService.findByDni(dni);
  }
}
