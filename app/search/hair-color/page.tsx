import data from '@/lib/data'
import Treatment from '@/components/treatments/treatment'

const HairColorPage = () => {
  return (
    <Treatment products={data.products} category='Hair Color & Chemicals' />
  )
}

export default HairColorPage
