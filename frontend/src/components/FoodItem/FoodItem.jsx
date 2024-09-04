import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { storeContext } from '../../contex/storeContext'

const FoodItem = ({id,name,price,description,image}) => {
 
  const {cartItems,addToCart, removeFromCart,url} = useContext(storeContext)
  return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white } alt=''/>
          :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
      }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rateing">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-disc' >{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
