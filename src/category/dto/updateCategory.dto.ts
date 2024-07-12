import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  uniqueId: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;
}
