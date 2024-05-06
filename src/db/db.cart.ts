import { ProductDB } from '@/models/ProductDB';
import Dexie, { Table } from 'dexie';

export class CartDB extends Dexie {
  product!: Table<ProductDB>;
  constructor() {
    super('cart');
    this.version(1).stores({
      product: '++id, name, category, subCategory, urlImg, price, quantity',
    });
  }
}

export const cartDB = new CartDB();
