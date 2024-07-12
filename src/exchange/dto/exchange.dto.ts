import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateExchangeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  isCryptoSupported: boolean;
}
