import * as React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
interface CardProductProps {
  src: string
  title: string
  type: string
  price: string
  quantity: number
}

export function CardProduct({ src, title, type, price }: CardProductProps) {
  return (
    <Link href={'/product'}>
      <Card className="w-[350px] bg-custom-gray">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {type} | <strong> R$ {price}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8 flex flex-col items-center">
          <Image
            src={src}
            alt={`Image`}
            width={253}
            height={323}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="m-2"
            variant="outline"
          >
            Informações
          </Button>
          <Button className="bg-custom-green">Adicionar no carrinho +</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
