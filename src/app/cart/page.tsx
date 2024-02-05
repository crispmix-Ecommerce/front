// 'use client'

import ProducCounterItem from '@/components/layout/shared/product-counter-item'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FlaskConical, HelpCircle, PaintBucket, Palette } from 'lucide-react'
import React, { ReactNode } from 'react'

export default function CartCheckout() {
  const CategoryColors = {
    Aditivos: 'green',
    Pigmentos: 'pink',
    Tintas: 'yellow',
  }
  interface Product {
    name: string
    category: keyof typeof CategoryColors
    price: string
    quantity: number
    color: string
    icon: ReactNode
    urlImg: string
  }

  const products: Product[] = [
    {
      name: 'Ligante',
      category: 'Aditivos',
      price: 'R$12.99',
      quantity: 3,
      color: CategoryColors.Aditivos,
      icon: <FlaskConical />,
      urlImg: '/ProdutoAditivo.png',
    },
    {
      name: 'Espessante',
      category: 'Aditivos',
      price: 'R$8.50',
      quantity: 1,
      color: CategoryColors.Aditivos,
      icon: <FlaskConical />,
      urlImg: '/ProdutoAditivo.png',
    },
    {
      name: 'Amarelo canário',
      category: 'Pigmentos',
      price: 'R$20.00',
      quantity: 2,
      color: CategoryColors.Pigmentos,
      icon: <Palette />,
      urlImg: '/ProdutoPigmento.png',
    },
    {
      name: 'Preto',
      category: 'Pigmentos',
      price: 'R$15.99',
      quantity: 4,
      color: CategoryColors.Pigmentos,
      icon: <Palette />,
      urlImg: '/ProdutoPigmento.png',
    },
    {
      name: 'Vermelho vivo',
      category: 'Pigmentos',
      price: 'R$10.50',
      quantity: 1,
      color: CategoryColors.Pigmentos,
      icon: <Palette />,
      urlImg: '/ProdutoPigmento.png',
    },
    {
      name: 'Amarelo flúor',
      category: 'Pigmentos',
      price: 'R$5.75',
      quantity: 3,
      color: CategoryColors.Pigmentos,
      icon: <Palette />,
      urlImg: '/ProdutoPigmento.png',
    },
    {
      name: 'Branco tws',
      category: 'Tintas',
      price: 'R$18.99',
      quantity: 2,
      color: CategoryColors.Tintas,
      icon: <PaintBucket />,
      urlImg: '/ProdutoTintasBagua.png',
    },
  ]

  return (
    <section className="flex-col items-center p-16 gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-1/2 p-2">
          {products.map((product, index) => (
            <p key={index}>
              <ProducCounterItem
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                urlImg={product.urlImg}
              ></ProducCounterItem>
            </p>
          ))}
        </div>
        <div className="lg:w-6/12">
          <div className="w-full p-6 border bg-custom-gray border-gray-400 rounded-lg">
            <div className="flex gap-4">
              <h1 className="font-bold uppercase text-2xl">
                Carrinho de compras
              </h1>
              <HelpCircle />
            </div>
            <p>Resumo de items</p>
            <div className="mt-4">
              {products.map((product, index) => (
                <p key={index}>
                  {`${product.quantity}x`}
                  <Badge
                    className={`items-center gap-2 m-1 text-black bg-custom-${product.color} hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                  >
                    {product.icon}
                    {product.category}
                  </Badge>
                  {`${product.name} - ${product.price}`}
                </p>
              ))}
            </div>
            <div className="grid mt-6">
              <div className="justify-self-end text-xl">
                <div className="flex gap-4">
                  <p>Total do pedido:</p>
                  <p className="font-bold uppercase">R$ 320,90</p>
                </div>
              </div>
            </div>
            <Button className="mt-8 p-8 w-full font-bold  bg-custom-blue hover:bg-custom-green">
              Solicitar Pedido
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
