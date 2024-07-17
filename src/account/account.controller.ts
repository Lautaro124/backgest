import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/crateAccount.dto';
import { UNIQUE_ID } from 'src/common/constants/headerKey.constants';
import { UpdateBalanceDto } from './dto/updateAccount.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(
    @Body() newAccount: CreateAccountDto,
    @Headers(UNIQUE_ID) uniqueId: string,
  ) {
    return this.accountService.create(newAccount, uniqueId);
  }

  @Get(':dni')
  async findByDni(@Param('dni') dni: string) {
    return this.accountService.findByDni(dni);
  }

  @Patch('/update-balance')
  async updateBalance(
    @Body() updateBalance: UpdateBalanceDto,
    @Headers(UNIQUE_ID) uniqueId: string,
  ) {
    return this.accountService.updateBalance(updateBalance, uniqueId);
  }
}
