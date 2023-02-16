import React from 'react'
import './List.scss'
import Card from '../Card/Card'
const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://i.ibb.co/S6qMxwr/1.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Denim Jumpsuit',
      isNew: true,
      oldPrice: 100,
      price: 12,
    },
    {
      id: 2,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
    {
      id: 3,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
    {
      id: 4,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
    {
      id: 5,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
    {
      id: 6,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
    {
      id: 7,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
  ]
  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
