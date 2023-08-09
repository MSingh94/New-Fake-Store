import React, { useState } from 'react'
import { useContext } from 'react';
import "./ProductCard.css"
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs"
import { CartContext } from '../../contexts/CartContext';


function ProductCard({product}) {

  //Global state, use {} not []
  const {addCart, inCart, removeCart} = useContext(CartContext)

  const [addInCart, setAddInCart] = React.useState(false);

  React.useEffect(
    () => {
       setAddInCart (inCart?.find(item => item.id === product.id))

    },[inCart]
  )

  return (
    <div className='product-card'>
      {
        addInCart?
        <h2><BsCartCheckFill onClick={() => removeCart(product.id)} className='cart' /></h2>
        :
        <h2><BsCartPlus onClick={() => addCart(product)} className='cart' /></h2>
      }
      <a href={`/details/${product.id}`}><img src={product.image}/></a>
      <p className="product-title">{product.title}</p>
      <p className="product-category">{product.category}</p>
      <p className="price">{product.price + ' €'}</p>
    </div>
  )
}

export default ProductCard
