'use client';

import ProducCounterItem from '@/app/cart/components/cart-counter-component';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import { CartCheckouComponent } from './components/cart-checkout-component';
import { useLiveQuery } from 'dexie-react-hooks';
import { cartDB } from '@/db/db.cart';
import { CartDBService } from '@/service/cache/cart_db.service';

interface ProductOption {
  price: number;
  unitMeasure: string;
}
interface ProductComponentProps {
  id: string;
  name: string;
  options: ProductOption[];
  images: { imageUrl: string }[];
  category: string;
  subCategory: string;
}

export default function CartCheckout() {
  const products = useLiveQuery(() => {
    const cartService = new CartDBService();
    return cartService.getProducts();
  });

  return (
    <section className="flex-col items-center gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-2">
          {products &&
            products.map((product, index) => (
              <ProducCounterItem
                key={index}
                id={product.id ?? 0}
                image={product.urlImg}
                getCategoryIcon={getCategoryIcon}
                productCategory={product.category}
                productSubCategory={product.subCategory}
                productName={product.name}
                productPrice={product.price}
                quantity={product.quantity}
              ></ProducCounterItem>
            ))}
        </div>
        <div className="lg:w-1/3 m-4 py-2">
          <CartCheckouComponent products={products}></CartCheckouComponent>
        </div>
      </div>
    </section>
  );
}
