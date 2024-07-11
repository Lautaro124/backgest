import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  value: number;
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsNotEmpty()
  @IsString()
  dni: string;
  @IsNotEmpty()
  @IsString()
  exchange: string;
}
