import {useState, useContext, useEffect, createContext} from "react"

export const CartContext = createContext()

export default function CartContextProvider(props) {

    const [inCart, setInCart] = useState([]);
    

    useEffect(() => {
        const storedCart = localStorage.getItem('cart-items')
        console.log(storedCart)
        if (storedCart){
            setInCart(JSON.parse(storedCart))
        }

    },[] //runs once when page loads
    )

    //this useEffect updates and stores items in local storage

    useEffect(() => {
        localStorage.setItem('cart-items', JSON.stringify(inCart))
    },[inCart] 
    
    //gets triggered when inCart state changes (adding or removing items in the cart)
    )


  

const addCart = (itemToAdd) => {
    console.log('adding', itemToAdd)
    
    let newInCart = [...inCart, itemToAdd]
    console.log(newInCart)
    setInCart(newInCart)

}

const removeCart = (prodId) => {
    console.log('removing', prodId)
    //use filter to keep all ones that are  not prodId 
    let newInCart = inCart.filter(item => item.id != prodId)
    console.log(newInCart)
    setInCart(newInCart)

}

return (
    <CartContext.Provider value={{inCart, addCart, removeCart, setInCart}}>
        {props.children}
    </CartContext.Provider>
)
}