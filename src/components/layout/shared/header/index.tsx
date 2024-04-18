'use client';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import Product from '@/models/ProductHome';

interface ProductData {
  id: string;
  name: string;
  option: { price: number }[];
  images: { firstImage: string }[];
  category: string;
  subCategory: string;
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data: ProductData[] = await response.json();

        const formattedProducts = data.map((productData) => {
          return new Product(
            productData.id,
            productData.name,
            productData.option,
            productData.images,
            productData.category,
            productData.subCategory,
          );
        });

        setProducts(formattedProducts);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-custom-gray">
        <div className="container p-4 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo crispmix"
                width={222}
                height={170}
              />
            </Link>

            <div className="w-full max-w-[768px] flex justify-center">
              <div className="w-full bg-white py-2 px-4 rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="Procure seu produto aqui."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  className="flex-1 outline-none placeholder:text-custom-dark placeholder:text-sm"
                  style={{ maxWidth: 'calc(100% - 40px)' }}
                />
                <Search
                  size={18}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <Link href="/cart">
              <div className="flex items-end gap-1 cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white bg-custom-blue">
                    19
                  </div>
                  <ShoppingCart
                    size={24}
                    fill="bg-custom-dark "
                  />
                </div>
                <span className="font-semibold">Carrinho</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isInputFocused && searchQuery && (
        <div className="container p-4">
          <ul>
            {searchResults.map((product) => (
              <li
                key={product.id}
                className="flex items-center py-2"
              >
                <Link
                  href={`/product/${product.id}`}
                  passHref
                >
                  <div className="flex flex-row items-center">
                    <div className="w-32 h-32 mr-4 border border-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src={product.getFirstImageUrl()}
                        alt={product.name}
                        layout="responsive"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <div className="mr-4">{product.name}</div>
                      <div className="flex items-center">
                        {getCategoryIcon(product.category)}
                        <span className="ml-2">{product.category}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{product.subCategory}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
