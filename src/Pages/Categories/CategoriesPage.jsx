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
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])
  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <Categories items={products}></Categories>
    </div>
  )
}

export default CategoriesPage
