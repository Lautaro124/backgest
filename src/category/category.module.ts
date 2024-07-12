import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category } from 'src/common/schema/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
      },
    ]),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}