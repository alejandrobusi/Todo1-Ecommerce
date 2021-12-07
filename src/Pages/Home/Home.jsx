import React, { useState, useEffect} from 'react'
import Browser from '../../components/Browser/Browser';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar'


function Home() {
  
  const [products, setProducts] = useState([])

  const [auxProduct, setAuxProducts] = useState([])

  const [searchText, setSearchText] = useState("")

  const getItems = () => {
    fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }
  
  useEffect(() => {

  getItems()

  }, [])

  useEffect(() => {
    
  const filteredProducts = products.filter((prod) => {
    if (prod.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
      return prod
    }
  })
  setAuxProducts(filteredProducts)

  }, [searchText])


  return (
    <div>
      <Navbar></Navbar>
      <Browser setSearchText={setSearchText} auxProduct={auxProduct} products={products}></Browser>
      <Footer></Footer>
    </div>
  )
}

export default Home