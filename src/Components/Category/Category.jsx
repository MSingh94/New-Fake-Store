import React, { useEffect, useState } from 'react';
import "./Category.css";
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

function Category({setProducts}) {
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('All');
  // const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    console.log('categories loaded');
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {

  // }, [selectedCategory]);
  
  const onCategorySelect = (category) => {
    console.log(category);
    
    
    //I need to get data for this category
    //Make an API call to get the data

    axios
    .get(`https://fakestoreapi.com/products/category/${category}`
    )
    .then((res) => {
      console.log(res.data);
      //What do i do with this data?
      //Change what is in products, to do that we call setProducts
      setProducts(res.data)
    })
    .catch((err) => console.log(err));
  };

  //make a function for the All button

    const showAll = () => {
      //I need to get all of the products to show from the API
      axios.get(`https://fakestoreapi.com/products`)
        .then(res=> {
          console.log(res.data)
        //I have the data, now what do i do with it?
        //Store this data in products state.
        setProducts(res.data)
        })

         .catch(err => console.log("err"))
    }


  return (
    <div className='category-container'>
      <button className="category-btn" onClick={showAll}>All</button>
      {categories.map((item) => (
        <button className="category-btn" onClick={() => onCategorySelect(item)} key={item}> {item} </button>
      ))}
    </div>
  );
}
export default Category;


// className={`category-btn ${selectedCategory === item ? 'active' : ''}`}