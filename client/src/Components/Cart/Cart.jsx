import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://i.ibb.co/S6qMxwr/1.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Denim Jumpsuit',
      desc: 'Denim Jumpsuit',
      isNew: true,
      oldPrice: 100,
      price: 12,
    },
    {
      id: 2,
      img: 'https://i.ibb.co/7bQQYkX/3.jpg',
      img2: 'https://i.ibb.co/M6hHc3F/2.jpg',
      title: 'Jumpsuit',
      desc: 'Jumpsuit for women',
      isNew: true,
      oldPrice: 102,
      price: 12,
    },
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
          </div>
          <div className="price">1x{item.price}</div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
