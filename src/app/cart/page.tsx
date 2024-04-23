'use client';

import ProducCounterItem from '@/app/cart/components/cart-counter-component';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import { CartCheckouComponent } from './components/cart-checkout-component';

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
  const products: ProductComponentProps[] = [
    {
      id: '40',
      subCategory: 'Plastisol',
      category: 'Tintas',
      name: 'Base relevo branco',

      images: [
        { imageUrl: 'https://picsum.photos/350' },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_642540-MLA73410715569_122023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_891136-MLB53351719176_012023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_940663-MLU73076549914_112023-F.webp',
        },
      ],
      options: [
        {
          unitMeasure: '1 Kg',
          price: 20.15,
        },
        {
          unitMeasure: '5 Kg',
          price: 100.75,
        },
        {
          unitMeasure: '10 Kg',
          price: 201.5,
        },
      ],
    },
    {
      id: '40',
      subCategory: 'Plastisol',
      category: 'Tintas',
      name: 'Base relevo branco',

      images: [
        { imageUrl: 'https://picsum.photos/350' },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_642540-MLA73410715569_122023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_891136-MLB53351719176_012023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_940663-MLU73076549914_112023-F.webp',
        },
      ],
      options: [
        {
          unitMeasure: '1 Kg',
          price: 20.15,
        },
        {
          unitMeasure: '5 Kg',
          price: 100.75,
        },
        {
          unitMeasure: '10 Kg',
          price: 201.5,
        },
      ],
    },
    {
      id: '40',
      subCategory: 'Plastisol',
      category: 'Tintas',
      name: 'Base relevo branco',

      images: [
        { imageUrl: 'https://picsum.photos/350' },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_642540-MLA73410715569_122023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_891136-MLB53351719176_012023-F.webp',
        },
        {
          imageUrl:
            'https://http2.mlstatic.com/D_NQ_NP_2X_940663-MLU73076549914_112023-F.webp',
        },
      ],
      options: [
        {
          unitMeasure: '1 Kg',
          price: 20.15,
        },
        {
          unitMeasure: '5 Kg',
          price: 100.75,
        },
        {
          unitMeasure: '10 Kg',
          price: 201.5,
        },
      ],
    },
  ];

  return (
    <section className="flex-col items-center gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-2">
          {products.map((product, index) => (
            <ProducCounterItem
              key={index}
              images={product.images}
              getCategoryIcon={getCategoryIcon}
              productCategory={product.category}
              productSubCategory={product.subCategory}
              productName={product.name}
              productPrice={20}
            ></ProducCounterItem>
          ))}
        </div>
        <div className="lg:w-1/3 m-4 py-2">
          <CartCheckouComponent></CartCheckouComponent>
        </div>
      </div>
    </section>
  );
}
