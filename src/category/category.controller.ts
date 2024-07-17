import { Body, Controller, Get, Patch, Post, Headers } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCatogory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { UNIQUE_ID } from 'src/common/constants/headerKey.constants';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(
    @Body() body: CreateCategoryDto,
    @Headers(UNIQUE_ID) uniqueId: string,
  ) {
    return this.categoryService.create(body, uniqueId);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Patch()
  updateCategory(
    @Body() body: UpdateCategoryDto,
    @Headers(UNIQUE_ID) uniqueId: string,
  ) {
    return this.categoryService.updateCategory(body, uniqueId);
  }
}
