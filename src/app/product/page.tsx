'use client'

import Banner from '@/components/layout/shared/banner'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ProductDetailPage() {
  const imageUrls = [
    '/ProdutoAditivo.png',
    '/ProdutoAditivo.png',
    '/ProdutoAditivo.png',
    '/ProdutoAditivo.png',
    '/ProdutoAditivo.png',
  ]
  return (
    <section className="flex-col items-center p-16 gap-4 ">
      <div className="w-full">Home / E-Commerce</div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-1/2 p-2">
          <Banner
            width={300}
            imageUrls={imageUrls}
          ></Banner>
        </div>
        <div className="lg:w-1/2 lg:ml-12 p-4 grid gap-1s border bg-custom-gray border-gray-400 rounded-lg">
          <h1 className="font-bold uppercase text-2xl">
            Cripmix Tinta Branco TWS
          </h1>
          <p className="text-justify pt-4 pr-2">
            Pureza e versatilidade em cada estampa. Com cobertura impecável,
            destaca designs em diversos substratos, proporcionando resultados
            visuais impactantes. Essencial para tecidos claros ou escuros, é a
            escolha confiável para contrastes nítidos e detalhes refinados.
          </p>
          <div className="grid rounded-lg border-2 m-6 ">
            <p className="font-bold justify-self-end text-4xl p-6">R$ 19,98</p>
          </div>
          <div className="grid">
            <div className="justify-self-end w-1/2">
              <p className="mb-2 font-bold">Quantidade</p>
              <form action="">
                <select
                  className="bg-white p-2 w-full border-2 border-gray-400 rounded-lg"
                  name="Qtd"
                  id="qtd"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </form>
            </div>
            <Button className="mt-8 p-8 w-full bg-custom-blue hover:bg-custom-green">
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
