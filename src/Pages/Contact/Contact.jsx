import React, {useState, useEffect} from 'react'
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
    </div>
  )
}

export default Contact
