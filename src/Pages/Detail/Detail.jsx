import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailItem from '../../components/DetailItem/DetailItem'
import Navbar from '../../components/NavBar/Navbar'



function Detail() {
 
  let { id } = useParams()
 
  const [products, setProducts] = useState([])

  const getItems = () => {
    fetch(process.env.REACT_APP_API_PRODUCTS)
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  useEffect(() => {

    getItems()

  }, [])

  const itemFilter = products.find( item => item._id === id );

  console.log(itemFilter)
  
  return (
    <div>
      <Navbar></Navbar>
      <DetailItem item={itemFilter}/>
    </div>
  )
}

export default Detail
