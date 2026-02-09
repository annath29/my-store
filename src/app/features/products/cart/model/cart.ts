import { Products } from '../../../../core/models/products';

export interface Cart {
  id: number;
  product: Products;
  quantity: number;
}
