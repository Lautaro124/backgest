import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/common/schema/account.schema';
import { CreateAccountDto } from './dto/crateAccount.dto';
import { UpdateBalanceDto } from './dto/updateAccount.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<Account>,
  ) {}

  async create(newAccount: CreateAccountDto) {
    const account = new this.accountModel(newAccount);
    account.save();
    return account;
  }

  async findByDni(dni: string): Promise<Account[]> {
    return this.accountModel
      .find({
        dni: dni,
      })
      .exec();
  }

  async updateBalance(updateBalance: UpdateBalanceDto) {
    const account = await this.accountModel.findOne({
      dni: updateBalance.uniqueId,
      name: updateBalance.name,
    });
    account.value = updateBalance.value;
    account.save();
    return account;
  }
}
