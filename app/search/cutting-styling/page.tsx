import data from '@/lib/data'
import CuttingStyling from '@/components/treatments/cuttingStyling'

const CuttingStylingPage = () => {
  //Filter products by category directly in the page
  const cuttingStylingProducts = data.products.filter(
    (product) => product.category === 'Cutting & Styling'
  )

  //Check if there are any products
  if (cuttingStylingProducts.length === 0) {
    return <div>No products available in the Cutting & Styling category.</div>
  }

  //Pass the filtered data to the cuttingStyling component
  return <CuttingStyling products={cuttingStylingProducts} />
}

export default CuttingStylingPage
