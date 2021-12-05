import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailItem from '../../components/DetailItem/DetailItem'
import Navbar from '../../components/NavBar/Navbar'



function Detail() {
 
  let { id } = useParams()
 
  const [products, setProducts] = useState([])

  const getItems = () => {
    fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  useEffect(() => {

  getItems()

  }, [])

  const itemFilter = products.find( item => item._id === id );
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])
  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <DetailItem item={itemFilter}/>
    </div>
  )
}

export default Detail
