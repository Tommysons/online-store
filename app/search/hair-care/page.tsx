import data from '@/lib/data'
import Treatment from '@/components/treatments/treatment'

const HairCarePage = () => {
  return <Treatment products={data.products} category='Hair Care Treatment' />
}

export default HairCarePage
