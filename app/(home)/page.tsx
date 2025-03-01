import { HomeCarousel } from '@/components/shared/home/home-carousel'
import data from '@/lib/data'
import { HomeCard } from '@/components/shared/home/home-card'

// import { Card, CardContent } from '@/components/ui/card'
import { getProductForCard } from '@/lib/actions/product.actions'

export default async function Page() {
  const brands = await getProductForCard({ category: 'Brands', limit: 4 })
  const cuttingStyling = await getProductForCard({
    category: 'Cutting & Styling',
    limit: 4,
  })

  const hairColorChemicals = await getProductForCard({
    category: 'Hair Color & Chemicals',
    limit: 4,
  })

  const hairCareTreatment = await getProductForCard({
    category: 'Hair Care Treatment',
    limit: 4,
  })

  const cards = [
    {
      title: 'Cutting & Styling',
      items: cuttingStyling,
      link: {
        text: 'View All',
        href: '/search?tag=cutting-styling',
      },
    },
    {
      title: 'Hair Color & Chemicals',
      items: hairColorChemicals,
      link: {
        text: 'View All',
        href: '/search?tag=hair-color-chemicals',
      },
    },
    {
      title: 'Hair Care Treatment',
      items: hairCareTreatment,
      link: {
        text: 'View All',
        href: '/search?tag=hair-care-treatment',
      },
    },
    {
      title: 'Brands',
      items: brands,
      link: {
        text: 'View All',
        href: '/search?tag=brands',
      },
    },
  ]

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />
      </div>
    </>
  )
}
