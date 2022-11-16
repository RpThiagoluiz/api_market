import { model, Schema } from 'mongoose';

export const Order = model(
  'Order',
  new Schema({
    table: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], //enum do ts
      default: 'WAITING',
    },
    products: {
      required: true,
      type: [
        {
          product: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now, //Não precisa executar porq o mongoose executa a function no momento que ele for criado.
    },
  })
);
