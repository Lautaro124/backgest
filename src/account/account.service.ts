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

  async create(newAccount: CreateAccountDto, uniqueId: string) {
    const account = new this.accountModel({
      ...newAccount,
      uniqueId: uniqueId,
    });
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

  async updateBalance(updateBalance: UpdateBalanceDto, uniqueId: string) {
    const account = await this.accountModel.findOne({
      uniqueId: uniqueId,
      name: updateBalance.name,
    });
    account.ammount = updateBalance.value;
    account.save();
    return account;
  }

  async updateUniuqeId(oldUniqueId: string, newUniqueId: string) {
    return this.accountModel.updateMany(
      { uniqueId: oldUniqueId },
      { uniqueId: newUniqueId },
    );
  }
}
