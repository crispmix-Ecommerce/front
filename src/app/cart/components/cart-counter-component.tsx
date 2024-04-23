import { getCategoryIcon } from '@/utils/getCategoryIcon';
import Image from 'next/image';
import React from 'react';
interface ProductDetailPageProps {
  getCategoryIcon: (category: string) => JSX.Element;
  productCategory: string;
  productSubCategory: string;
  productName: string;
  productPrice: number;
  images: { imageUrl: string }[];
}

export default function ProducCounterItem({
  getCategoryIcon,
  productCategory,
  productSubCategory,
  images,
  productName,
  productPrice,
}: ProductDetailPageProps) {
  return (
    <div className="flex-col  border-2 border-custom-gray rounded  my-4">
      <div className="w-full flex p-2 border-b-2 border-custom-gray">
        <div>{getCategoryIcon(productCategory)}</div>
        <span className="ml-2">
          {productCategory} | {productSubCategory}
        </span>
      </div>
      <div className=" flex my-4 py-2 px-4">
        <div className="flex flex-col  gap-4">
          <Image
            className="rounded-lg border-2 border-custom-gray"
            src={images[0].imageUrl}
            alt="Logo crispmix"
            width={95}
            height={161}
          />
        </div>
        <div className="flex flex-col w-full space-y-2">
          <h3 className="font-bold px-2">{productName}</h3>
          <div className="lg:flex justify-between p-2  items-center">
            <p className="cursor-pointer mb-2 hover:text-custom-pink">
              Excluir
            </p>
            <p className="text-blue-400 mb-2 hover:text-blue-500 cursor-pointer">
              Comprar
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex border-custom-gray border-2 rounded items-center gap-4">
                <span className="w-full font-bold px-2 lg:text-2xl cursor-pointer  hover:text-custom-pink">
                  -
                </span>
                <div>{2}</div>
                <span className="w-full font-bold p-2 lg: cursor-pointer  hover:text-blue-500">
                  +
                </span>
              </div>
              <p className="lg:text-2xl">R$ {productPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
