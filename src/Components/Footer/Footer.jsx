import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'



function Footer() {

  const navigate = useNavigate();
  

  return (
    <div className='footer-container'>
      <div className="footer-text">
        Created by Manmeet Dhingra
      </div>
      <button onClick={() => {navigate('/Contact')}} className="contact-btn">Contact Us</button>
    </div>
  )
}

export default Footer
