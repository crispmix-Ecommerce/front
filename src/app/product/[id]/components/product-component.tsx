'use client';

import Product from '@/models/ProductHome';
import { useEffect, useState } from 'react';

interface ProductComponentProps {
  id: string;
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
        const data: Product[] = await response.json();
        const selectedProduct = data.find((product) => product.id === id);
        if (selectedProduct) {
          setProduct(selectedProduct);
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
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
    </>
  );
}
