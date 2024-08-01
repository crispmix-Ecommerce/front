import { CartDBService } from '@/service/cache/cart_db.service';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import Image from 'next/image';
import React from 'react';
interface ProductDetailPageProps {
  id: number;
  getCategoryIcon: (category: string) => JSX.Element;
  productCategory: string;
  productSubCategory: string;
  productName: string;
  productPrice: number;
  image: string;
  quantity: number;
}

export default function ProducCounterItem({
  id,
  getCategoryIcon,
  productCategory,
  productSubCategory,
  image,
  productName,
  productPrice,
  quantity,
}: ProductDetailPageProps) {
  const removeProductCart = () => {
    const cartService = new CartDBService();
    cartService.removeProduct(id);
  };

  const addQuantity = () => {
    const cartService = new CartDBService();
    cartService.editProduct({
      id,
      category: productCategory,
      subCategory: productSubCategory,
      name: productName,
      price: productPrice,
      quantity: quantity + 1,
      urlImg: image,
    });
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      const cartService = new CartDBService();
      cartService.editProduct({
        id,
        category: productCategory,
        subCategory: productSubCategory,
        name: productName,
        price: productPrice,
        quantity: quantity - 1,
        urlImg: image,
      });
    }
  };

  const valor = productPrice.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });

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
            src={image}
            alt="Logo crispmix"
            width={95}
            height={161}
          />
        </div>
        <div className="flex flex-col w-full space-y-2">
          <h3 className="font-bold px-2">{productName}</h3>
          <div className="lg:flex justify-between p-2  items-center">
            <p
              onClick={removeProductCart}
              className="cursor-pointer mb-2 hover:text-custom-pink"
            >
              Excluir
            </p>
            <p className="text-blue-400 mb-2 hover:text-blue-500 cursor-pointer">
              Comprar
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex border-custom-gray border-2 rounded items-center gap-4">
                <span
                  onClick={removeQuantity}
                  className="w-full font-bold px-2 lg:text-2xl cursor-pointer  hover:text-custom-pink"
                >
                  -
                </span>
                <div>{quantity}</div>
                <span
                  onClick={addQuantity}
                  className="w-full font-bold p-2 lg: cursor-pointer  hover:text-blue-500"
                >
                  +
                </span>
              </div>
              <p className="lg:text-2xl">R$ {valor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
