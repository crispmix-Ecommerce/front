'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import Product from '@/models/ProductHome';
import { NavigationSubMenu } from '../sub-header';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ShoppingCartIcon } from 'lucide-react';

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

  const handleLinkClick = () => {
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleSearchFocus = (isInputFocused: boolean) => {
    setTimeout(() => {
      setIsInputFocused(isInputFocused);
      if (!isInputFocused) handleLinkClick();
    }, 100);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults =
      query.trim() === ''
        ? []
        : products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()),
          );
    setSearchResults(filteredResults);
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
            <div className="w-full max-w-[768px] flex justify-center relative">
              <Command>
                <CommandInput
                  placeholder="Pesquise seus produtos aqui"
                  value={searchQuery}
                  onChangeCapture={handleSearchChange}
                  onFocus={() => handleSearchFocus(true)}
                  onBlur={() => handleSearchFocus(false)}
                />
                <CommandList className="absolute inset-x-0 top-[40px] z-50 bg-white">
                  {searchResults.length === 0 &&
                    isInputFocused &&
                    searchQuery.trim() !== '' && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  {searchResults.length > 0 && (
                    <CommandGroup heading="Produtos">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={handleLinkClick}
                        >
                          <CommandItem>
                            <div className="flex flex-row items-center">
                              <div className="w-32 h-32 mr-4 border-4 border-custom-gray rounded-lg overflow-hidden">
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
                                  <span className="ml-2">
                                    {product.category}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <span>{product.subCategory}</span>
                                </div>
                              </div>
                            </div>
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                  )}
                </CommandList>
              </Command>
            </div>

            <Link href="/cart">
              <div className="flex items-end gap-1 cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white bg-custom-blue">
                    19
                  </div>
                  <ShoppingCartIcon
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
      <div className="bg-custom-dark p-2 flex items-center justify-center">
        <NavigationSubMenu />
      </div>
    </div>
  );
}
