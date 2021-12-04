import React, {useState, useEffect} from 'react'
import Footer from '../../components/Footer/Footer';
import HelpPage from '../../components/HelpPage/HelpPage';
import Navbar from '../../components/NavBar/Navbar'

function Contact() {
  
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    
    setToken(JSON.parse(localStorage.getItem('token')) )
    setUserData(JSON.parse(localStorage.getItem('user')) )

  }, [])
  
  return (
    <div>
      <Navbar userData={userData} token={token}></Navbar>
      <HelpPage/>
      <Footer/>
    </div>
  )
}

export default Contact
