import React, { useState, useEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

function CategoriesPage(props) {
  
  const [products, setProducts] = useState([])
  
  const getItems = () => {
    fetch(process.env.REACT_APP_API_PRODUCTS)
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
      <Footer></Footer>
    </div>
  )
}

export default CategoriesPage
