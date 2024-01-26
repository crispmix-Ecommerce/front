import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-custom-gray">
        <div className="container p-2 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-4">
            <Image
              src="/logo.png"
              alt="Logo crispmix"
              width={150}
              height={150}
            />

            <div className="w-full max-w-[768px] flex justify-center">
              <div className="w-full bg-white py-2 px-4 rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="Procure seu produto aqui."
                  className="flex-1 outline-none placeholder:text-custom-dark placeholder:text-sm"
                />
                <Search
                  size={18}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-end gap-1 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-blue-300 text-xs flex items-center justify-center text-white">
                  19
                </div>
                <ShoppingCart size={16} />
              </div>
              <span className="font-semibold">Carrinho</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-dark text-white p-2">
        <div className="container p-2"></div>
      </div>
    </div>
  )
}
