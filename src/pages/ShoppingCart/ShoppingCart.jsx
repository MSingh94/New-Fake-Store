import React, { useContext } from 'react'
import './ShoppingCart.css'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom';
import Homepage from '../homepage/Homepage';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '40%',
  },
  overlay:{
    backgroundColor:"rgba(0, 0, 0, 0.2)"
  },
};

Modal.setAppElement(document.getElementById('root'));

function ShoppingCart() {


  const calcTotal = () =>{
    //loop through products in cart
    let total = 0;
    for (let i = 0; i < inCart.length; i++){
      total += inCart[i].price;
    }
    return total;
   }

  //Global state, use {} not []
  const {inCart, setInCart} = useContext(CartContext)
  
  const navigate = useNavigate()

  const goHome = () => {
    //it must empty cart
    setInCart([]) 
    //return to homepage
    navigate("/")
  }

  const [isOpen, setIsOpen] = React.useState(false)




  //setInCart does not work in click function

  return (
    
    <div className='items-container'>
     <h2 className='title'>Your Shopping Cart</h2>
        <div >
        {
            inCart.length > 0 ?
          
        <div>
        <div className="items">
        {inCart.map(item => <ProductCard key={item.id} product={item} />)}
        </div>

        <h2 className='total'>Total €{calcTotal()}</h2>
        
        <button className='checkout-btn' onClick={() => {setIsOpen(true)}}>Checkout</button>

          </div>
        :

        <h1 className='title-empty'>Your shopping cart is empty</h1>

        }
      </div>
      <div>
      

      
      </div>
      
      <Modal
        id='modal'
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <h3>Your order was successful!</h3>
        <h3>Check your email for order confirmation. <br></br> Thank you for shopping with Fake Store!</h3>

        <button onClick={goHome}>Return to Homepage</button>

      </Modal>
      </div>
  )
}

export default ShoppingCart
