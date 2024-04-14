'use client'
import * as React from 'react';
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
import { useRouter } from 'next/navigation'

interface CardProductProps {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  id: string;
}

export function CardProduct({ imageUrl, title, category, price, id }: CardProductProps) {
  const categoryIcon = getCategoryIcon(category);

  const router = useRouter()
  

  const addProductToCard = () => {
    router.push('/'); 
  };

  return (
    <Card className="w-[350px] bg-custom-gray">
      <Link href={'/product/' + id}>
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
          <Image src={imageUrl} alt={title} width={253} height={323} />
        </CardContent>
      </Link>
      <CardFooter className="flex justify-center">
      <Link href={'/product/' + id}>
        <Button className="m-2" variant="outline" onClick={() => console.log(id)}>
          Informações sobre o produto?
        </Button>
        </Link>
        <Button className="bg-custom-green text-black  hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105">Adquirir</Button>
      </CardFooter>
    </Card>
  );
}
