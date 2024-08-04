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
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Home.card');
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
            {t('information')}
          </Button>
        </Link>
        <Button
          onClick={handleOpenDialog}
          className="bg-custom-green text-black  hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          {t('buy')}
        </Button>
        {isDialogOpen && (
          <OpenInformationComponent
            warnText={t('dialogBuy.warn')}
            title={t('dialogBuy.title')}
            onClose={handleCloseDialog}
            buttonText={t('dialogBuy.buyMore')}
            content={
              <div>
                <p className="text-md mb-12">{t('dialogBuy.description')}</p>
              </div>
            }
            children={
              <div>
                <Link href="/cart">
                  <Button
                    onClick={addToStorage}
                    className="bg-custom-green text-black hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {t('dialogBuy.buyNow')}
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
