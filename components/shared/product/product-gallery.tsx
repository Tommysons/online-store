'use client'

import { useState } from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Handle empty images array
  if (!images || images.length === 0) {
    return <div>No images available.</div>
  }

  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2 mt-8'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            onMouseOver={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
            className={`bg-white rounded-lg overflow-hidden
                        ${
                          selectedImage === index
                            ? 'ring-2 ring-blue-500'
                            : 'ring-1 ring-gray-300'
                        }`}
          >
            <Image
              src={image || '/placeholder-image.png'} // Fallback for empty src
              alt={`Product image ${index + 1}`}
              width={50}
              height={50}
              priority={index === 0} // Only prioritize the first image
            />
          </button>
        ))}
      </div>

      <div className='w-full'>
        <Zoom zoomMargin={40}>
          <div className='relative h-[500px]'>
            <Image
              src={images[selectedImage]}
              alt={`Product image ${selectedImage + 1}`}
              fill
              sizes='500vw'
              className='object-contain'
              priority={selectedImage === 0} // Only prioritize the first image
            />
          </div>
        </Zoom>
      </div>
    </div>
  )
}
