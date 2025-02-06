'use server'

import Product from '../db/models/product.model'
import { connectToDatabase } from '../db'

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
