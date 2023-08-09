import React from 'react'
import "./Header.css"
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  return (
    <div className='header-container'>
      <div onClick={() => {navigate('/homepage')}}>
        <h2>Fake Store </h2>
        </div>
      <div onClick={() => {navigate('/cart')}}>
        <p></p>
      <h2><BsCart4 size="30px" cursor="pointer"/></h2>
      </div>
    </div>
  )
}

export default Header
