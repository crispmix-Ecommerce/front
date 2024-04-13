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
interface CardProductProps {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
}

export function CardProduct({ imageUrl, title, category, price }: CardProductProps) {
  const categoryIcon = getCategoryIcon(category); 

  return (
    <Link href="/product">
      <Card className="w-[350px] bg-custom-gray">
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
        <CardFooter className="flex justify-center">
          <Button className="m-2" variant="outline">
            Informações
          </Button>
          <Button className="bg-custom-green">Adicionar no carrinho +</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
