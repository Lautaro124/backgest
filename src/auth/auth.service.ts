import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { SingUpDto } from './dto/singUp.dto';
import { Auth } from './interface/auth.interface';
import { v4 as uuidv4 } from 'uuid';
import { CategoryService } from 'src/category/category.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    private categoryService: CategoryService,
    private accountService: AccountService,
  ) {}

  async signIn(
    { email, password }: LoginDto,
    uniqueId?: string,
  ): Promise<Auth> {
    const user = await this.userService.findOneByEmail(email);
    if (!user && user.password !== password) {
      throw new UnauthorizedException();
    }
    if (uniqueId && user.uniqueId !== uniqueId) {
      throw new UnauthorizedException();
    }
    const newUniqueId = this.createNewUniqueID();
    const token = await this.jwtService.signAsync({
      email: user.email,
      securityCode: user.securityCode,
    });
    await this.updateUserUniqueID(email, user.uniqueId, newUniqueId);

    return { token, uniqueId: newUniqueId };
  }

  async signUp(singUpDto: SingUpDto): Promise<Auth> {
    const isUserSecurityCode = await this.userService.findOneBySecurityCode(
      singUpDto.securityCode,
    );
    const isUserEmail = await this.userService.findOneByEmail(singUpDto.email);

    if (isUserSecurityCode || isUserEmail) {
      throw new UnauthorizedException('User already exists');
    }
    const newUniqueId = this.createNewUniqueID();

    const newUser = await this.userService.createUser({
      ...singUpDto,
      uniqueId: newUniqueId,
    });

    const token = await this.jwtService.signAsync({
      email: newUser.email,
      securityCode: newUser.securityCode,
      uniqueId: newUser.uniqueId,
    });

    return { token, uniqueId: newUniqueId };
  }

  createNewUniqueID(): string {
    const newUniqueId = uuidv4();
    return newUniqueId as string;
  }

  updateUserUniqueID(email: string, oldUniqueID: string, uniqueId: string) {
    this.userService.updateUniuqeId(email, uniqueId);
    this.categoryService.updateUniuqeId(oldUniqueID, uniqueId);
    this.accountService.updateUniuqeId(oldUniqueID, uniqueId);
  }
}
