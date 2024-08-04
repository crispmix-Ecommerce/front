import { CartDBService } from '@/service/cache/cart_db.service';
import { useLiveQuery } from 'dexie-react-hooks';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  title: string;
}

export default function CartComponent({ title }: HeaderProps) {
  const cartCount = useLiveQuery(() => {
    const cartDB = new CartDBService();
    return cartDB.getCountProducts();
  });

  return (
    <Link href="/cart">
      <div className="flex items-end gap-1 cursor-pointer">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white bg-custom-blue">
            {cartCount}
          </div>
          <ShoppingCartIcon
            size={24}
            fill="bg-custom-dark"
          />
        </div>
        <span className="font-semibold">{title}</span>
      </div>
    </Link>
  );
}
