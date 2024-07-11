import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Account {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    default: 0,
  })
  value: number;

  @Prop({
    required: true,
  })
  category: string;

  @Prop({
    required: true,
  })
  dni: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
