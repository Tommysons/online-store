'use server'

import Product, { IProduct } from '../db/models/product.model'
import { connectToDatabase } from '../db'
import { PAGE_SIZE } from '../constants'

export async function getAllCategories() {
  await connectToDatabase()
  const categories = await Product.find({ isPublished: true }).distinct(
    'category'
  )

  return categories
}

export async function getProductForCard({
  category,
  limit = 4,
}: {
  category: string
  limit?: number
}) {
  await connectToDatabase()
  const products = await Product.find(
    {
      category: { $in: [category] },
      isPublished: true,
    },
    {
      name: 1,
      href: { $concat: [`/product/`, '$slug'] },
      image: { $arrayElemAt: ['$images', 0] },
    }
  )
    .sort({ createdAt: 'desc' })
    .limit(limit)

  return JSON.parse(JSON.stringify(products)) as {
    name: string
    href: string
    image: string
  }[]
}

//GET ONE PRODUCT BY SLUG
export async function getProductBySlug(slug: string) {
  await connectToDatabase()
  const product = await Product.findOne({ slug, isPublished: true })
  if (!product) throw new Error('Product not found')
  return JSON.parse(JSON.stringify(product)) as IProduct
}

//Get related products: Products with same category
export async function getRealtedProductsByCategory({
  category,
  productId,
  limit = PAGE_SIZE,
  page = 1,
}: {
  category: string
  productId: string
  limit?: number
  page?: number
}) {
  await connectToDatabase()
  const skipAmount = (Number(page) - 1) * limit
  const conditions = {
    isPublished: true,
    category,
    _id: { $ne: productId },
  }

  const products = await Product.find(conditions)
    .sort({ createdAt: 'desc' })
    .skip(skipAmount)
    .limit(limit)

  const productsCount = await Product.countDocuments(conditions)
  return {
    data: JSON.parse(JSON.stringify(products)) as IProduct[],
    totalPages: Math.ceil(productsCount / limit),
  }
}
