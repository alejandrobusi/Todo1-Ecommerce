import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar/navBar.css'
import logo from '../../assets/logoNav.png'
import Login from '../LoginModal/Login'


function Navbar() {

const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('user')).admin)

const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))

const user = {
  name: "Visita",
  admin: false
}

const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('cart')
  localStorage.setItem('user', JSON.stringify(user))
  document.location.href = '/home';
}

  return (
    <div>
      <div>
        <section className="">
          <nav className="navbar navbar-expand-lg navbar-dark bgNav shadow">
            <div className="container justify-content-lg-between justify-content-md-center justify-content-sm-center">
              <div className='container-fluid d-flex align-items-center'>
                <a href="/home" className="navbar-brand"><img src={logo} className="imgNav w-25 mx-4" alt="ImageNav"/></a>
                <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav align-items-center">
                  
                  <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive" aria-current="page" >Home</NavLink>
                  <NavLink exact to="/categories"className="navLink" activeClassName="navLinkActive" aria-current="page" >Categorias</NavLink>
                  <NavLink exact to="/cart" className="navLink" activeClassName="navLinkActive" aria-current="page" >Carrito 🛒</NavLink>
                  {isAdmin
                  ?
                  <NavLink exact to="/admin" className="navLink" activeClassName="navLinkActive" aria-current="page" >Herramientas del Admin</NavLink>
                  :
                  <></>
                  }
                  {token
                  ?
                  <></>
                  :
                  <Login setIsAdmin={setIsAdmin} setToken={setToken}></Login>
                  }
                  {token
                  ?
                  <button type="button" onClick={() => {logOut()}} className="btn btn-success mx-1">LogOut</button>
                  :
                  <></>
                  }
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
}

export default Navbar
