'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/lib/db/models/product.model'

export default function ProductSlider({
  title,
  products,
  hideDetails = false,
}: {
  title?: string
  products: IProduct[]
  hideDetails?: boolean
}) {
  if (!products || products.length === 0) {
    return <div>No products available.</div>
  }

  return (
    <div className='w-full bg-background'>
      {title && <h2 className='h2-bold mb-5'>{title}</h2>}
      <Carousel opts={{ align: 'start' }} className='w-full'>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className={
                hideDetails
                  ? 'md:basis-1/4 lg:basis-1/6'
                  : 'md:basis-1/3 lg:basis-1/5'
              }
            >
              <Link href={`/product/${product.slug}`} passHref>
                <div className='p-2 cursor-pointer'>
                  {product.images && product.images.length > 0 && (
                    <Image
                      src={product.images[0] || '/placeholder-image.png'}
                      alt={product.name}
                      width={300}
                      height={200}
                      className='w-full h-48 object-cover rounded-lg'
                    />
                  )}
                  {!hideDetails && (
                    <div className='mt-2'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                      <p className='text-sm text-gray-500'>
                        {typeof product.price === 'number'
                          ? `$${product.price.toFixed(2)}`
                          : typeof product.listPrice === 'string'
                          ? `${product.listPrice}`
                          : 'N/A'}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' aria-label='Previous product' />
        <CarouselNext className='right-0' aria-label='Next product' />
      </Carousel>
    </div>
  )
}
