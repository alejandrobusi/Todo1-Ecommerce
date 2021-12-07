import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import ConfirmedCart from '../../components/ConfirmedCart/ConfirmedCart'
import Footer from '../../components/Footer/Footer'


function Confirmation() {
  
  return (
    <div>
      <Navbar></Navbar>
      <ConfirmedCart></ConfirmedCart>
      <Footer></Footer>
    </div>
  )
}

export default Confirmation