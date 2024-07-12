import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Category {
  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  uniqueId: string;

  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: String,
  })
  color: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
