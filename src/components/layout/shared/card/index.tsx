'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getCategoryIcon } from '@/utils/getCategoryIcon';
import OpenInformationComponent from '../openInformation';
import { CartDBService } from '@/service/cache/cart_db.service';
import { useState } from 'react';

interface CardProductProps {
  imageUrl: string;
  title: string;
  category: string;
  subCategory: string;
  price: number;
  id: string;
}

export function CardProduct({
  imageUrl,
  title,
  category,
  subCategory,
  price,
  id,
}: CardProductProps) {
  const categoryIcon = getCategoryIcon(category);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    addToStorage();
    setIsDialogOpen(false);
  };

  const addToStorage = () => {
    const cart = new CartDBService();
    cart.addProduct({
      name: title,
      category: category,
      subCategory: subCategory,
      price: price,
      quantity: count,
      urlImg: imageUrl,
    });
  };

  return (
    <Card className="w-[23rem] bg-custom-gray">
      <Link href={`/product/${id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <div className="flex items-center">
              {categoryIcon}
              <span className="ml-2">{category}</span>
            </div>
            <strong> R$ {price}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8 flex flex-col items-center">
          <Image
            src={imageUrl}
            alt={title}
            width={320}
            height={320}
          />
        </CardContent>
      </Link>
      <CardFooter className="flex justify-center">
        <Link href={`/product/${id}`}>
          <Button
            className="m-2"
            variant="outline"
            onClick={() => console.log(id)}
          >
            Informações sobre o produto?
          </Button>
        </Link>
        <Button
          onClick={handleOpenDialog}
          className="bg-custom-green text-black  hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Adquirir
        </Button>
        {isDialogOpen && (
          <OpenInformationComponent
            title="Continuar comprando?"
            onClose={handleCloseDialog}
            buttonText="Quero continuar comprando mais itens."
            content={
              <div>
                <p className="text-md mb-12">
                  O item será adicionado ao carrinho, caso queira continuar
                  explorando o catálogo.
                </p>
              </div>
            }
            children={
              <div>
                <Link href="/cart">
                  <Button
                    onClick={addToStorage}
                    className="bg-custom-green text-black hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Adquirir agora
                  </Button>
                </Link>
              </div>
            }
          />
        )}
      </CardFooter>
    </Card>
  );
}
