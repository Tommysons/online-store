import { IProductInput } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TreatmentProps {
  products: IProductInput[]
  category: string
}

const Treatment = ({ products, category }: TreatmentProps) => {
  // Filter products by the provided category
  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  // If no products are found for the category, display a message
  if (filteredProducts.length === 0) {
    return (
      <div className='text-center'>
        No products available in the {category} category.
      </div>
    )
  }

  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl mb-6 text-center'>{category}</h1>
      <div
        className='grid'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.slug}
            className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <Link href={`/product/${product.slug}`} passHref>
              <div className='cursor-pointer'>
                {product.images && product.images.length > 0 && (
                  <div className='relative h-48'>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300} // Explicit width
                      height={200} // Explicit height
                      className='object-cover w-full h-full' // Ensure the image covers the container
                    />
                  </div>
                )}
                <div className='p-4'>
                  <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                  <p className='text-gray-600'>
                    {typeof product.price === 'number'
                      ? `Price: $${product.price.toFixed(2)}`
                      : typeof product.listPrice === 'string'
                      ? `${product.listPrice}`
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Treatment
