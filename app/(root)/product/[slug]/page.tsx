import {
  getProductBySlug,
  getRealtedProductsByCategory,
} from '@/lib/actions/product.actions'
import ProductGallery from '@/components/shared/product/product-gallery'
import { Separator } from '@/components/ui/separator'
import ProductSlider from '@/components/shared/product/product-slider'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = await getProductBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page: string }>
}) {
  const searchParams = await props.searchParams
  const { page } = searchParams
  const params = await props.params
  const { slug } = params
  const product = await getProductBySlug(slug)
  const relatedProducts = await getRealtedProductsByCategory({
    category: product.category,
    productId: product._id,
    page: Number(page || '1'),
  })

  return (
    <div className='container mx-auto p-4'>
      {/* Product Details Section */}
      <section>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-5'>
          {/* Product Gallery */}
          <div className='col-span-2'>
            <ProductGallery images={product.images} />
          </div>

          {/* Product Information */}
          <div className='col-span-3 flex flex-col gap-4 md:p-5'>
            <div className='flex flex-col gap-3'>
              {/* Category */}
              <p className='p-medium-16 rounded-full bg-grey-500/10 text-grey-500 text-lg'>
                Category: {product.category}
              </p>

              {/* Product Name */}
              <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>

              <Separator className='width-20px' />

              {/* Price and Description */}
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                {product.price ? (
                  <div className='flex gap-3'>
                    <p className='p-bold-20 text-grey-600 font-bold'>Price:</p>
                    <p className='p-bold-20 text-primary'>
                      ${product.price.toFixed(2)}
                    </p>
                    <p>{product.listPrice}</p>
                  </div>
                ) : (
                  product.listPrice && (
                    <div className='flex gap-3'>
                      <p className='p-bold-20 text-grey-600 font-bold'>
                        Price:
                      </p>
                      <p>{product.listPrice}</p>
                    </div>
                  )
                )}
              </div>

              <div>
                <p className='p-bold-20 text-grey-600 text-lg'>Description</p>
                <p className='p-medium-16 lg:p-regular-18'>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className='my-6' />
      </section>
      <section className='mt-10'>
        <ProductSlider products={relatedProducts.data} />
      </section>
    </div>
  )
}
