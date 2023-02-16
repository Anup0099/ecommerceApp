import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import './Products.scss'

const Products = () => {
  // const param = useParams()
  const catId = parseInt(useParams().id)
  // console.log(param)
  const [maxPrice, setmaxPrice] = useState(1000)
  const [sort,setSort]= useState(null);
  return (
    <div className="products">
    
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="InputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} />

          <label htmlFor="asc">Price (Lowest price)</label>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("desc")}/>

          <label htmlFor="asc">Price (Highest price) </label>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="/img/fashion.jpg"
          alt=""
        />
        <List catID={catId} maxPrice ={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products
