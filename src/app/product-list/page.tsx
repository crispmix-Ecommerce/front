import { CardProduct } from '@/components/layout/shared/card'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ProductList() {
  const productData = [
    {
      src: '/ProdutoAditivo.png',
      title: 'Hyper Fusion Elixir',
      type: 'Aditivo',
      price: '19,99',
    },
    {
      src: '/ProdutoPigmento.png',
      title: 'Quantum Chroma Essence',
      type: 'Pigmento a base de água',
      price: '24,99',
    },
    {
      src: '/ProdutoTintasBagua.png',
      title: 'Aqua Nebula Paint',
      type: 'Tinta a base de água',
      price: '14,99',
    },
    {
      src: '/ProdutoTintasPVC.png',
      title: 'Galactic PVC Paint',
      type: 'Tinta Plastisol',
      price: '29,99',
    },
    {
      src: '/ProdutoAditivo.png',
      title: 'Infinity Boost Additive',
      type: 'Aditivo',
      price: '39,99',
    },
    {
      src: '/ProdutoPigmento.png',
      title: 'Celestial Glow Pigment',
      type: 'Pigmento Plastisol',
      price: '18,99',
    },
  ]
  return (
    <section className="flex flex-col items-center p-16 gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div className="w-full font-semibold">Title</div>
      <div className="w-full">Description List</div>
      <div className="flex flex-wrap justify-center p-6 gap-5">
        {productData.map((product, index) => (
          <CardProduct
            key={index}
            src={product.src}
            title={product.title}
            type={product.type}
            price={product.price}
            quantity={0}
          />
        ))}
      </div>
      <div>
        {/* TODO: Function get more item list */}
        <Button>Ver mais +</Button>
      </div>
    </section>
  )
}
