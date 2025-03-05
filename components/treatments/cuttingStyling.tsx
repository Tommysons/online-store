import { IProductInput } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CuttingStyling = ({ products }: { products: IProductInput[] }) => {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-6 text-center'>
        Cutting & Styling Services
      </h1>
      <div className='grid grid-cols-1 sm:gri-cols-2 md:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.slug} className='product-card'>
            <Link href={`/product/${product.slug}`} passHref>
              {product.images && product.images.length > 0 && (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={300}
                  height={200}
                  className='product-image'
                />
              )}
              <h2>{product.name}</h2>
              <p>
                Price: $
                {typeof product.price === 'number'
                  ? product.price.toFixed(2)
                  : product.listPrice || 'N/A'}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CuttingStyling
