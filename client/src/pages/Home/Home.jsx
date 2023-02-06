import React from 'react'
import Categories from '../../Components/Categories/Categories'
import { FeaturedProducts } from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home