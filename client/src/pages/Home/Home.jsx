import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Conatct from '../../Components/Conatct/Conatct'
import { FeaturedProducts } from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
import './Home.scss'
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Conatct />
    </div>
  )
}

export default Home
