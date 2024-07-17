import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SingUpDto } from './dto/singUp.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { UNIQUE_ID } from 'src/common/constants/headerKey.constants';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(
    @Body() signInDto: LoginDto,
    @Headers(UNIQUE_ID) oldUniqueID?: string,
  ) {
    return this.authService.signIn(signInDto, oldUniqueID);
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post('register')
  signUp(@Body() signUpDto: SingUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
