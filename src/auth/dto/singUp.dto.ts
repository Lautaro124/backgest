import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SingUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(4)
  securityCode: string;
  @IsNotEmpty()
  @IsString()
  ammount: number;
}
