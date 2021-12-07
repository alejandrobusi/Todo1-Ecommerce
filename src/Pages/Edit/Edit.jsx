import React, {useState, useEffect} from 'react'
import Navbar from '../../components/NavBar/Navbar'
import { useParams } from 'react-router-dom'
import EditItem from '../../components/EditItem/EditItem'

function Edit() {

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
  
  return (
    <div>
      <Navbar></Navbar>
      <EditItem item={itemFilter}></EditItem>
    </div>
  )
}

export default Edit
