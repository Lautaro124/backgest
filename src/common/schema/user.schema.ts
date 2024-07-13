import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: false,
    type: String,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  password: string;

  @Prop({
    required: true,
    type: String,
    unique: true,
    minlength: 4,
    maxlength: 4,
  })
  securityCode: string;

  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  uniqueId: string;

  @Prop({
    required: true,
    type: Number,
    default: 0,
  })
  ammount: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
