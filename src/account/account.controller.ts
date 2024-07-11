import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/crateAccount.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() newAccount: CreateAccountDto) {
    return this.accountService.create(newAccount);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }
}
