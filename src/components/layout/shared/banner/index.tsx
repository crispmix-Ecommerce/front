import * as React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface CardProductProps {
  imageUrls: string[]
  width?: number | null
}

export default function Banner({ imageUrls, width }: CardProductProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex flex-col items-center">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={width ?? 1200}
                height={300}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
