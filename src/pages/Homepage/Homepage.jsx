import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Category from '../../Components/category/Category';

function Homepage() {

  

  const [products, setProducts] = useState([])

  //https://fakestoreapi.com/products

  useEffect(
    ()=>{
        console.log('Homepage loaded')
        //Why am I doing this?
        //Call the API, To get the products data
      
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=> {
          console.log(res.data)
        //I have the data, now what do i do with it?
        //Store this data in products state.
        setProducts(res.data)
        })

         .catch(err => console.log("err"))
    
    
      }, []
      )



      return (
        <div className='home-container'>
          <Category setProducts={setProducts}/>
          <div className="products-container">
            {products.map(item => <ProductCard key={item.id} product={item} />)}
          </div>
        </div>
      )
    }
    

export default Homepage
