import React from 'react'
import Card from '../Card/Card'
import './FeaturedProduct.scss'
export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2:
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      oldPrice: 200,
      isNew: true,
      price: 150,
    },
    {
      id: 2,
      img:
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2:
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Nike Air Max 270',
      oldPrice: 200,
      isNew: true,
      price: 150,
    },
    {
      id: 3,
      img:
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2:
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Nike Air Max 270',
      oldPrice: 200,
      isNew: true,
      price: 150,
    },
    {
      id: 4,
      img:
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2:
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Nike Air Max 270',
      oldPrice: 200,
      isNew: true,
      price: 150,
    },
  ]
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
