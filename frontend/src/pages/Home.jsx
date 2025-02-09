import Hero from '../components/Layout/Hero'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturedSection from '../components/Products/FeaturedSection'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import TopProducts from '../components/Products/TopProducts'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>
        <ProductDetails/>
        <TopProducts/>
        <FeaturedCollection/>
        <FeaturedSection/>
    </div>
  )
}

export default Home