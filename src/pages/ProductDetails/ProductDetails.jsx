import React, { useEffect, useState} from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


function ProductDetails() {

  const {addCart, inCart, removeCart} = useContext(CartContext)

  const{productId} = useParams() 

  const [product, setProduct] = useState('')

  const [addInCart, setAddInCart] = React.useState(false);


  useEffect(
    ()=> {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        console.log(res.data)
        //I have the data, what do i do with it?
        setProduct(res.data)
      }
      )
      .catch(err=>console.log(err))
    }, []
  )

    React.useEffect(
    () => {

      console.log('product is', productId)
      console.log(typeof (productId))

       setAddInCart(inCart?.find(item => item.id == productId))

    },[inCart]
  )
  return (
    <div className='container'>
      <div className="item-container">
        <div className='img-container'><img className='item-img'src={product.image} />
        </div>
        
        <div style={{backgroundColor: "white"}} className="text-container">
        <h2>{product.title}</h2>
        <h2 id='price'>{product.price} €</h2>
        <h2 id='description'>Description</h2>
        <p>{product.description}</p>

        {

        addInCart?

        <button className="checkout-btn" onClick={() => removeCart(product.id)} >Remove from Cart</button> 
        :
        <button className="checkout-btn" onClick={() => addCart(product)} >Add to Cart</button>
      }
        </div>
        
        </div>
     
    </div>
  )
}

export default ProductDetails
