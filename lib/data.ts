import { Data, IProductInput } from '@/types'
import { toSlug } from './utils'

const products: IProductInput[] = [
  {
    name: "Women's Hair Cut & Style",
    slug: toSlug("Women's Hair Cut & Style"),
    category: 'Cutting & Styling',
    images: ['/images/cutting-styling/women.jpeg'],
    isPublished: true,
    price: 75.0,
    listPrice: 'Prices may vary depending on the style.',
    description: 'Need description here',
  },
  {
    name: "Men's Hair Cut & Style",
    slug: toSlug("Men's Hair Cut & Style"),
    category: 'Cutting & Styling',
    images: ['/images/cutting-styling/man.jpeg'],
    isPublished: true,
    price: 45.0,
    listPrice: 'Prices may vary depending on the style.',
    description: 'Need description here',
  },
  {
    name: 'Kids Hair Cut & Style',
    slug: toSlug('Kids Hair Cut & Style'),
    category: 'Cutting & Styling',
    images: ['/images/cutting-styling/kid.jpeg'],
    isPublished: true,
    price: 25.0,
    description: 'Need description here',
  },
  {
    name: 'Bang trim(first time guest)',
    slug: toSlug('Bang trim(first time guest)'),
    category: 'Cutting & Styling',
    images: ['/images/cutting-styling/bang.jpeg'],
    isPublished: true,
    price: 15.0,
    description: 'Need description here',
  },
  {
    name: 'Shampoo Blow-Dry',
    slug: toSlug('Shampoo Blow-Dry'),
    category: 'Cutting & Styling',
    images: ['/images/cutting-styling/shampoo.jpeg'],
    isPublished: true,
    price: 40.0,
    listPrice: 'Prices may vary depending on the style.',
    description: 'Need description here',
  },
  {
    name: 'Color retouch Grey coverage',
    slug: toSlug('Color retouch Grey coverage'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/grey.jpeg'],
    isPublished: true,
    price: 130.0,
    listPrice: 'Prices may vary depending on the style.',
    description:
      'Typically 1/2 inch grey hair growth. Approximately 2 Hours service.',
  },
  {
    name: 'Color Balance',
    slug: toSlug('Color Balance'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/balance.jpeg'],
    isPublished: true,
    price: 150.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `Grey Coverage over 1 inch growth or natural hair colour growth,
    added shine glossing treatment through out the hair. Approximately 2 hours 30 min service.`,
  },
  {
    name: 'Full Head of Highlights',
    slug: toSlug('Full Head of Highlights'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/full-head.jpeg'],
    isPublished: true,
    price: 285.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `High Lights, Low Lights or a combination of the two are 
    applied to the entire body of hair, This service offers seamless all over hair
    colour with beautiful dimensions. Aproximately 2-4 hours service.`,
  },
  {
    name: 'Partial Foil Highlights',
    slug: toSlug('Partial Foil Highlights'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/partial.jpeg'],
    isPublished: true,
    price: 175.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `High lights or low lights or a combination of the two are applied
    from the crown of the head forward to the front of the hair line.
    Adding beautiful fimensional colour to the top and front part of the hair.
    Approximately 2-4 hours service.`,
  },
  {
    name: 'Colour Gloss',
    slug: toSlug('Color Gloss'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/gloss.jpeg'],
    isPublished: true,
    price: 50.0,
    description: `Great for all hair types to add incredible shine and protection,
     can be added to any colour service or as a Stand alone gloss.
     (Blow Dry is Extra) Approximately 1 hour service.`,
  },
  {
    name: 'Global Lightening for Blonds',
    slug: toSlug('Global Lightening for Blonds'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/blonds.jpeg'],
    isPublished: true,
    price: 50.0,
    description: `Great for all hair types to add incredible shine and protection,
     can be added to any colour service or as a Stand alone gloss.
     (Blow Dry is Extra) Approximately 1 hour service.`,
  },
  {
    name: 'Special Occasions',
    slug: toSlug('Special Occasions'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/occasion.jpeg'],
    listPrice: 'Price varies and will be determined during consultation.',
    description: `Up Do's for special occasions Upon Consultation.`,
    isPublished: true,
  },
  {
    name: 'Balayage',
    slug: toSlug('Balayage'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/balayage.jpeg'],
    isPublished: true,
    price: 300.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `A Sun kissed natural looking hair colour with softer and less
    noticeable re-growth. It comes in various shapes and forms, dependign on the
    guest desired look, it can be bold, light blond or warm. This trend can be for
    any lengh of hair, a very technical and personalized style.
    Approximately 2-4 hours service.`,
  },
  {
    name: 'Shadow Root Highlights',
    slug: toSlug('Shadow Root Highlights'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/shadow.jpeg'],
    isPublished: true,
    price: 300.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `This a low maintenance hair colour technique in which a softer shade is
    applied directly to the roots giving a soft seamless contrats. It is a great way to
    refresh your look! Giving your hair colour depth and dimension. Think blonde
    highlighted hair with dim roots.
    Aproximately 2-4 hours service.`,
  },
  {
    name: 'Baby Lights',
    slug: toSlug('Baby Lights'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/baby.jpeg'],
    isPublished: true,
    price: 285.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `These are very delicate white blond highlights created using a very
    fine colouring technique to mimic a blond hue as if your hair has been naturally
    lightened in the sun, a very soft and natural look.
    Approximately 2-4 hours service.`,
  },
  {
    name: 'Ombre',
    slug: toSlug('Ombre'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/ombre.jpeg'],
    isPublished: true,
    price: 250.0,
    listPrice: 'Prices may vary depending on the style.',
    description: `Shaded Colouring technique where a darker base colour is gradually
    lightened towards the end of the hair. Usually starting around mid-way giving it a
    sun kissed effect. This Two-Toned hair can be as dramatic as you like.
    Approximately 2-4 hours service.`,
  },
  {
    name: 'Color Correction',
    slug: toSlug('Color Correction'),
    category: 'Hair Color & Chemicals',
    images: ['/images/hair-color/correction.jpeg'],
    isPublished: true,
    listPrice: 'Price varies and will be determined during consultation.',
    description: `Price varies and will be determined during consultation.`,
  },
  {
    name: 'Olaplex Repair & Strengthening',
    slug: toSlug('Olaplex Repair & Strengthening'),
    category: 'Hair Care Treatment',
    images: ['/images/hair-care/olaplex.jpeg'],
    isPublished: true,
    price: 50.0,
    listPrice: 'The price may go up to $85',
  },
  {
    name: 'Regular Deep Conditioning Mask',
    slug: toSlug('Regular Deep Conditioning Mask'),
    category: 'Hair Care Treatment',
    images: ['/images/hair-care/conditioning.jpeg'],
    isPublished: true,
    price: 20.0,
  },
  {
    name: 'Botanical Hair Treatment',
    slug: toSlug('Botanical Hair Treatment'),
    category: 'Hair Care Treatment',
    images: ['/images/hair-care/botanical.jpeg'],
    isPublished: true,
    price: 40.0,
  },
  {
    name: 'Keratin Smoothing Treatment',
    slug: toSlug('Keratin Smoothing Treatment'),
    category: 'Hair Care Treatment',
    images: ['/images/hair-care/keratin.jpeg'],
    isPublished: true,
    price: 350.0,
    listPrice: 'Prices may vary depending on the treatment.',
  },
  {
    name: 'Olaplex',
    slug: toSlug('Olaplex'),
    category: 'Brands',
    images: ['/images/brands/olaplex.jpeg'],
    isPublished: true,
  },
  {
    name: 'Keratin Complex',
    slug: toSlug('Keratin Complex'),
    category: 'Brands',
    images: ['/images/brands/keratin.jpeg'],
    isPublished: true,
  },
  {
    name: 'Maroccanoil',
    slug: toSlug('Maroccanoil'),
    category: 'Brands',
    images: ['/images/brands/maroccanoil.jpeg'],
    isPublished: true,
  },
  {
    name: 'Redken',
    slug: toSlug('Redken'),
    category: 'Brands',
    images: ['/images/brands/redken.jpeg'],
    isPublished: true,
  },
]

const data: Data = {
  products,
  headerMenus: [
    {
      name: 'Cutting & Styling',
      href: '/search/cutting-styling',
    },
    {
      name: 'Hair Color & Chemicals',
      href: '/search/hair-color',
    },
    {
      name: 'Hair Cair Treatment',
      href: '/search/hair-care',
    },
    {
      name: 'Products',
      href: '/search?tag=products',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Contact Us',
      href: '/page/contact-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Cutting & Styling',
      buttonCaption: 'Book Now',
      url: '/search/cutting-styling',
      image: '/images/cutting-styling2.jpg',
      isPublished: true,
    },
    {
      title: 'Hair Color & Chemicals',
      buttonCaption: 'Book Now',
      image: '/images/hair-color.jpg',
      url: '/search/hair-color',
      isPublished: true,
    },
    {
      title: 'Hair Care Treatment',
      buttonCaption: 'Book Now',
      image: '/images/hair-treatment.jpg',
      url: '/search/hair-care',
      isPublished: true,
    },
    // {
    //   title: 'Keratin',
    //   buttonCaption: 'Order Now',
    //   image: '/images/keratin.jpg',
    //   url: '/search?catergory=keratin',
    //   isPublished: true,
    // },
    // {
    //   title: 'Maroccanoil',
    //   buttonCaption: 'Order Now',
    //   image: '/images/maroccanoil.jpg',
    //   url: '/search?catergory=maroccanoil',
    //   isPublished: true,
    // },
    // {
    //   title: 'Opalex',
    //   buttonCaption: 'Order Now',
    //   image: '/images/opalex.jpg',
    //   url: '/search?catergory=opalex',
    //   isPublished: true,
    // },
    // {
    //   title: 'Redken',
    //   buttonCaption: 'Order Now',
    //   image: '/images/redken.jpg',
    //   url: '/search?catergory=redken',
    //   isPublished: true,
    // },
  ],
}

export default data
