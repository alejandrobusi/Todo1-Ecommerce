import React, { useState, useEffect} from 'react'
import Browser from '../../components/Browser/Browser';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar'


function Home() {
  
  const [products, setProducts] = useState([])

  const [auxProduct, setAuxProducts] = useState([])

  const [searchText, setSearchText] = useState("")

  const getItems = () => {
    fetch(process.env.REACT_APP_API_PRODUCTS)
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }
  
  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    
    const filteredProducts = products.filter((prod) => (prod.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) 
    )
    setAuxProducts(filteredProducts)

  }, [products, searchText])


  return (
    <div>
      <Navbar></Navbar>
      <Browser setSearchText={setSearchText} auxProduct={auxProduct} products={products}></Browser>
      <Footer></Footer>
    </div>
  )
}

export default Home