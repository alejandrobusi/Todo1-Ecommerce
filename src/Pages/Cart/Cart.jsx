import React, { useState, useEffect } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import MainCart from '../../components/MainCart/MainCart'


function Cart() {

  const [products, setProducts] = useState([])
  
  const getItems = () => {
    fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  useEffect(() => {

  getItems()

  }, [products])
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])
  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <MainCart></MainCart>
      <Footer></Footer>

    </div>
  )
}

export default Cart
