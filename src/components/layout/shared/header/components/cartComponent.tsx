import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CartComponent() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <Link href="/cart">
      <div className="flex items-end gap-1 cursor-pointer">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white bg-custom-blue">
            {cartItemCount}
          </div>
          <ShoppingCartIcon
            size={24}
            fill="bg-custom-dark"
          />
        </div>
        <span className="font-semibold">Carrinho</span>
      </div>
    </Link>
  );
}
