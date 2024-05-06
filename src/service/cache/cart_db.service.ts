import { cartDB } from '@/db/db.cart';
import { ProductDB } from '@/models/ProductDB';

export class CartDBService {
  async getCountProducts() {
    const count = await cartDB.product.count();
    return count;
  }

  async getProducts(): Promise<ProductDB[]> {
    const products = await cartDB.product.toArray();
    return products;
  }

  addProduct(product: ProductDB): void {
    cartDB.product.add(product);
  }

  removeProduct(id: number): void {
    cartDB.product.delete(id);
  }

  editProduct(product: ProductDB): void {
    cartDB.product.put(product);
  }
}
