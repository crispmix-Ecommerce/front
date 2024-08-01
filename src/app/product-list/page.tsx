'use client';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardProduct } from '@/components/layout/shared/card';
import Product from '@/models/Product';
interface ProductOption {
  price: number;
  unitMeasure: string;
}
interface ProductData {
  id: string;
  name: string;
  options: ProductOption[];
  images: { imageUrl: string }[];
  category: string;
  subCategory: string;
}

export default function ProductList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListContent />
    </Suspense>
  );
}

function ProductListContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';
  const subCategory = searchParams.get('subCategory') || '';

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data: ProductData[] = await response.json();

        let filteredProducts: ProductData[];

        if (subCategory) {
          filteredProducts = data.filter(
            (product) =>
              product.category === category &&
              product.subCategory === subCategory,
          );
        } else if (category) {
          filteredProducts = data.filter(
            (product) => product.category === category,
          );
        } else {
          filteredProducts = data;
        }
        const formattedProducts = filteredProducts.map((productData) => {
          return new Product(
            productData.id,
            productData.name,
            productData.options,
            productData.images,
            productData.category,
            productData.subCategory,
          );
        });

        setProducts(formattedProducts);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData();
  }, [category, subCategory]);

  return (
    <section className="flex flex-col items-center p-16 gap-4">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            id={product.id}
            title={product.name}
            price={product.getOptionPrice(0).price}
            imageUrl={product.getImageUrl(0)}
            category={product.category}
            subCategory={product.subCategory}
          />
        ))}
      </div>
    </section>
  );
}
