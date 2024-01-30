import * as React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const imageUrls = [
  '/banner-1.jpg',
  '/banner-1.jpg',
  '/banner-1.jpg',
  '/banner-1.jpg',
  '/banner-1.jpg',
]

export default function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex flex-col items-center">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={1000}
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
