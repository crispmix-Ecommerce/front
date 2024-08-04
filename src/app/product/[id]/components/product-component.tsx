'use client';
import React, { useEffect, useState } from 'react';
import Product from '@/models/Product';
import { ProductImageComponent } from './product-image-component';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import { ProductDetailPage } from './product-detail-component';
import { ProductCheckoutComponent } from './product-checkout-component';
import ReactMarkdown from 'react-markdown';

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
  description: string;
}

export function ProductComponent({ id }: ProductComponentProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

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
            selectedProduct.options,
            selectedProduct.images,
            selectedProduct.category,
            selectedProduct.subCategory,
            selectedProduct.description,
          );
          setProduct(formattedProduct);
          setSelectedPrice(selectedProduct.options[0]?.price || null);
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

  const handleOptionSelect = (index: number) => {
    setSelectedPrice(product?.options[index]?.price || null);
  };

  return (
    <section className="flex-col items-center lg:p-16 md:p-16 gap-4">
      <div className="w-full">Home / E-Commerce</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : product ? (
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-1/3 md:w-full">
            <ProductImageComponent images={product.images} />
          </div>

          <div className="lg:w-1/3  m-4 space-y-4 md:w-full">
            <ProductDetailPage
              getCategoryIcon={getCategoryIcon}
              productCategory={product.category}
              productSubCategory={product.subCategory}
              productName={product.name}
              productPrice={selectedPrice || 0}
              productParcelPrice={(Number(selectedPrice) / 12)
                .toFixed(2)
                .toString()}
            />

            <div className="flex my-4 space-x-2">
              {product.options.map((option, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded border ${
                    selectedPrice === option.price
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option.unitMeasure}
                </button>
              ))}
            </div>
            <div className="py-4 text-justify">
              <ReactMarkdown>{product.description}</ReactMarkdown>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-full border-2 border-custom-gray m-4 pr-4 p-4 rounded">
            <ProductCheckoutComponent
              name={product.name}
              category={product.category}
              subCategory={product.subCategory}
              price={selectedPrice || product.options[0]?.price}
              urlImg={product.getImageUrl(0)}
            ></ProductCheckoutComponent>
          </div>
        </div>
      ) : null}
    </section>
  );
}
