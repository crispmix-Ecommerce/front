'use client';
import React, { useEffect, useState } from 'react';
import Product from '@/models/Product';
import { ProductImageComponent } from './product-image-component';

interface ProductComponentProps {
  id: string;
  name: string;
  option: { price: number }[];
  images: { imageUrl: string }[];
  category: string;
  subCategory: string;
}

export function ProductComponent({ id }: ProductComponentProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data: ProductComponentProps[] = await response.json();
        const selectedProduct = data.find((product) => product.id === id);
        if (selectedProduct) {
          const formattedProduct = new Product(
            selectedProduct.id,
            selectedProduct.name,
            selectedProduct.option,
            selectedProduct.images,
            selectedProduct.category,
            selectedProduct.subCategory,
          );
          setProduct(formattedProduct);
        } else {
          setError('Produto não encontrado.');
        }
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className="flex-col items-center lg:p-16 md:p-16 gap-4">
      <div className="w-full">Home / E-Commerce</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : product ? (
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-1/3 md:w-full">
            <ProductImageComponent images={product.images} />
          </div>
          <div className="lg:w-1/3 md:w-full bg-custom-green">
            Green content
          </div>
          <div className="lg:w-1/3 md:w-full bg-custom-pink">Pink content</div>
        </div>
      ) : null}
    </section>
  );
}
