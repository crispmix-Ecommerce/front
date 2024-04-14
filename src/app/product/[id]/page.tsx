'use client'

import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Product from '@/models/ProductHome';

export default function ProductDetailPage() {
  const { id } = useParams();
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
        const selectedProduct = data.find(product => product.id === id);
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
    <section className="flex-col items-center p-16 gap-4">
      <h1>Produto fetch</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {product && (
        <pre>{JSON.stringify(product, null, 2)}</pre>
      )}
    </section>
  );
}
