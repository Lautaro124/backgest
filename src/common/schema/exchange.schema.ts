import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Exchange {
  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
    type: Boolean,
  })
  isCryptoSupported: boolean;
}

export const ExchangeSchema = SchemaFactory.createForClass(Exchange);
