import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Purchasesreg from '../../components/Purchasesreg/Purchasesreg'
import AddProduct from '../../components/AddProduct/AddProduct'
import ProductListEdit from '../../components/ProductListEdit/ProductListEdit'


function Admin(props) {

  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])

  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <div className='container-fluid d-flex row my-5'>
        {/* <Purchasesreg></Purchasesreg> */}
        <AddProduct></AddProduct>
        <ProductListEdit token={token}></ProductListEdit>
      </div>
    </div>
  )
}

export default Admin
