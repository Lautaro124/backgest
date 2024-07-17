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

  async create(newCategory: CreateCategoryDto, uniqueId: string) {
    const category = new this.categoryModel({
      ...newCategory,
      uniqueId: uniqueId,
    });
    category.save();
    return category;
  }

  async findAll() {
    return this.categoryModel.find();
  }

  async updateCategory(updateCategoryDto: UpdateCategoryDto, uniqueId: string) {
    const category = await this.categoryModel.findOne({
      dni: uniqueId,
    });
    if (!category) {
      return null;
    }
    category.name = updateCategoryDto.name ?? category.name;
    category.color = updateCategoryDto.color ?? category.color;
    category.save();
    return category;
  }

  async updateUniuqeId(oldUniqueId: string, newUniqueId: string) {
    return this.categoryModel.updateMany(
      { uniqueId: oldUniqueId },
      { uniqueId: newUniqueId },
    );
  }
}
