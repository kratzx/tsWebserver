export interface Product {
  name: string;
  price: number;
  sku: string;
  description: string;
  category: string;
  tags?: Array <string>;
}