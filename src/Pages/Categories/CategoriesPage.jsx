import React, { useState, useEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import Navbar from '../../components/NavBar/Navbar'

function CategoriesPage(props) {
  
  const [products, setProducts] = useState([])
  
  const getItems = () => {
    fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  useEffect(() => {

  getItems()

  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <Categories items={products}></Categories>
    </div>
  )
}

export default CategoriesPage
