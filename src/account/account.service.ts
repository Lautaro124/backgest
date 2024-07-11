import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/common/schema/account.schema';
import { CreateAccountDto } from './dto/crateAccount.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<Account>,
  ) {}

  async create(newAccount: CreateAccountDto): Promise<Account> {
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
}
