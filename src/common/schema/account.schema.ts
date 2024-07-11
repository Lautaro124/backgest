import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Account {
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    default: 0,
    type: Number,
  })
  value: number;

  @Prop({
    required: true,
    type: String,
  })
  category: string;

  @Prop({
    required: true,
    type: String,
  })
  dni: string;
  @Prop({
    required: true,
    type: String,
  })
  exchange: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
