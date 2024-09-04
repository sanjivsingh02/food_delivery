import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = ({category,setCategory}) => {
  
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>choose from a diverse menu featuring a delectable of array dishes crafted with the finenst ingredient and curlinary expertise. our menu statsify your craving and evelate your dining experince, one delicious meal at the time </p>
        <button >View Menu</button>
      </div>
    </div>
  )
}

export default Header
