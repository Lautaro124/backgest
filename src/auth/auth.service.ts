import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { SingUpDto } from './dto/singUp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: LoginDto): Promise<{ token: string }> {
    const user = await this.userService.findOneByEmail(email);
    if (!user && user.password !== password) {
      throw new UnauthorizedException();
    }
    const token = await this.jwtService.signAsync({
      email: user.email,
      securityCode: user.securityCode,
      uniqueId: user.uniqueId,
    });
    return { token };
  }

  async signUp(singUpDto: SingUpDto): Promise<{ token: string }> {
    const userExists = await this.userService.findOneBySecurityCode(
      singUpDto.securityCode,
    );
    if (userExists) {
      throw new UnauthorizedException('User already exists');
    }
    const uniqueId = singUpDto.securityCode + singUpDto.name;
    const newUser = await this.userService.createUser({
      ...singUpDto,
      uniqueId,
    });

    const token = await this.jwtService.signAsync({
      email: newUser.email,
      securityCode: newUser.securityCode,
      uniqueId: newUser.uniqueId,
    });

    return { token };
  }
}
