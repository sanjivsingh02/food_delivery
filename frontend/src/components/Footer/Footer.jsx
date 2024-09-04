import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footet-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro dolores quisquam, reprehenderit similique delectus quia veritatis nemo dicta ipsum nostrum soluta ullam perspiciatis tenetur iste! Omnis ratione doloribus nobis!</p>
         <div className="footer-social-icons">
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
         </div>
        </div>
         
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-22-88-44-88</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright tomato.com 2024,All Right Reversed</p>
    </div>
  )
}

export default Footer
