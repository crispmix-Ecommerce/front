import Banner from '@/components/layout/shared/banner'
import { CardProduct } from '@/components/layout/shared/card'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function HomePage() {
  const imageUrls = [
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
  ]
  return (
    <section className="flex flex-col items-center p-16 gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div>
        <Banner imageUrls={imageUrls}></Banner>
      </div>
      <div className="font-semibold">Mais populares</div>
      <div className="flex flex-wrap justify-center p-6 gap-5">
        <CardProduct
          src={'/ProdutoAditivo.png'}
          title={'Hyper Fusion Elixir'}
          type={'Aditivo'}
          price={'19,99'}
        ></CardProduct>
        <CardProduct
          src={'/ProdutoPigmento.png'}
          title={'Quantum Chroma Essence'}
          type={'Pigmento a base de água'}
          price={'24,99'}
        ></CardProduct>
        <CardProduct
          src={'/ProdutoTintasBagua.png'}
          title={'Aqua Nebula Paint'}
          type={'Tinta a base de água'}
          price={'14,99'}
        ></CardProduct>
        <CardProduct
          src={'/ProdutoTintasPVC.png'}
          title={'Galactic PVC Paint'}
          type={'Tinta Plastisol'}
          price={'29,99'}
        ></CardProduct>
        <CardProduct
          src={'/ProdutoAditivo.png'}
          title={'Infinity Boost Additive'}
          type={'Aditivo'}
          price={'39,99'}
        ></CardProduct>
        <CardProduct
          src={'/ProdutoPigmento.png'}
          title={'Celestial Glow Pigment'}
          type={'Pigmento Plastisol'}
          price={'18,99'}
        ></CardProduct>
      </div>

      <div>
        <Button>Ver mais +</Button>
      </div>
    </section>
  )
}
