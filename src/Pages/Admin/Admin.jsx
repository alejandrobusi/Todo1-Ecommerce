import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Purchasesreg from '../../components/Purchasesreg/Purchasesreg'
import AddProduct from '../../components/AddProduct/AddProduct'


function Admin() {

  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])
  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <div className='container'>
        <Purchasesreg></Purchasesreg>
        <AddProduct></AddProduct>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default Admin
