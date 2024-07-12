import { IsNumber, IsString, Min } from 'class-validator';

export class UpdateBalanceDto {
  @IsString()
  name: string;

  @IsString()
  dni: string;

  @IsNumber()
  @Min(0)
  value: number;
}
