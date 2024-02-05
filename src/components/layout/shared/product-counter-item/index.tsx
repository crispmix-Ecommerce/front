import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
interface Product {
  name: string
  price: string
  quantity: number
  urlImg: string
}

export default function ProducCounterItem({
  name,
  price,
  quantity,
  urlImg,
}: Product) {
  return (
    <section className="p-2 py-4 gap-4 flex  text-sm  ">
      <div className="flex flex-col gap-4">
        <Image
          className="rounded-lg border-2 border-gray-400"
          src={urlImg}
          alt="Logo crispmix"
          width={95}
          height={161}
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <h3 className="font-bold">{name}</h3>
        <div className="flex justify-between items-center gap-6">
          <p>{price}</p>
          <p>Excluir</p>
          <div className="flex items-center gap-4">
            <Button className="w-full font-bold  bg-custom-blue hover:bg-red-500">
              -
            </Button>
            <div>{quantity}</div>
            <Button className="w-full font-bold  bg-custom-blue hover:bg-custom-green">
              +
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
