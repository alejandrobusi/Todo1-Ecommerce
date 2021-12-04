import React, { useState, useEffect, useLayoutEffect} from 'react'
import Banner from '../../components/Banner/Banner';
import Browser from '../../components/Browser/Browser';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar'
import ProdDestacados from '../../components/ProdDestacados/ProdDestacados'


function Home() {
  
  const [products, setProducts] = useState([])

  const [auxProduct, setAuxProducts] = useState([])

  const [searchText, setSearchText] = useState("")

  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useLayoutEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])

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
      <Navbar userData={userData} token={token}></Navbar>
      <Banner></Banner>
      <ProdDestacados></ProdDestacados>
      <Browser setSearchText={setSearchText} auxProduct={auxProduct} products={products}></Browser>
      <Footer></Footer>
    </div>
  )
}

export default Home