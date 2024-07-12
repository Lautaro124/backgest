import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/common/schema/category.schema';
import { CreateCategoryDto } from './dto/createCatogory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ) {}

  async create(newCategory: CreateCategoryDto) {
    const category = new this.categoryModel(newCategory);
    category.save();
    return category;
  }

  async findAll() {
    return this.categoryModel.find();
  }

  async updateCategory(updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findOne({
      dni: updateCategoryDto.uniqueId,
    });
    if (!category) {
      return null;
    }
    category.name = updateCategoryDto.name ?? category.name;
    category.color = updateCategoryDto.color ?? category.color;
    category.save();
    return category;
  }
}
