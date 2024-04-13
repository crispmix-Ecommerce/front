'use client'
import React, { useState, useEffect } from 'react';
import Banner from '@/components/layout/shared/banner';
import { CardProduct } from '@/components/layout/shared/card';
import { Button } from '@/components/ui/button';
import Product from '@/models/ProductHome'; 

interface ProductData {
  name: string;
  option: { price: number }[];
  images: { firstImage: string }[];
  category: string;
}

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data: ProductData[] = await response.json(); 
        const formattedProducts = data.slice(0, 20).map((productData: ProductData) => {
          return new Product(
            productData.name,
            productData.option,
            productData.images,
            productData.category
          );
        });
        setProducts(formattedProducts);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const imagesUrls = [
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
  ];

  return (
    <section className="flex flex-col items-center p-16 gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div>
        <Banner imageUrls={imagesUrls}></Banner>
      </div>
      <div className="font-semibold">Mais populares</div>
      <div className="flex flex-wrap justify-center p-6 gap-5">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            title={product.name}
            price={product.getFirstOptionPrice().toString()} 
            imageUrl={product.getFirstImageUrl()}
            category={product.category}
          />
        ))}
      </div>
      <div>
        <Button>Ver mais +</Button>
      </div>
    </section>
  );
}
