import { Schema, model } from 'mongoose';
import { Product } from '../../models';

export const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sku: { type: String, required: true},
  description: { type: String, required: true},
  tags: [String]
  }, { collection: 'products' });

export const ProductModel = model<Product>('Product', ProductSchema);