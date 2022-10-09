import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import AddProduct from '../../components/AddProduct/AddProduct'
import ProductListEdit from '../../components/ProductListEdit/ProductListEdit'
import Footer from '../../components/Footer/Footer'


function Admin(props) {

  const [token, setToken] = useState("")
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )

  }, [])

  
  return (
     <> <Navbar></Navbar>
    <div className="container">
      <div className='row w-100 justify-content-center justify-content-lg-around my-5'>
        <AddProduct></AddProduct>
        <ProductListEdit token={token}></ProductListEdit>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Admin
