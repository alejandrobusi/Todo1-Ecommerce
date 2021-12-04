import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar/navBar.css'
import logo from '../../assets/LOSPRIMOS.png'
import Login from '../LoginModal/Login'


function Navbar(props) {

const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('user')).admin)

const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))


  return (
    <div>
      <div>
        <section className="">
          <nav className="navbar navbar-expand-lg navbar-dark bgNav shadow">
            <div className="container justify-content-lg-between justify-content-md-center justify-content-sm-center">
              <div>
                <a href="/home" className="navbar-brand"><img src={logo} className="imgNav mx-4" alt="ImageNav"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav align-items-center">
                  <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive" aria-current="page" >Home</NavLink>
                  <NavLink exact to="/categories"className="navLink" activeClassName="navLinkActive" aria-current="page" >Categories</NavLink>
                  <NavLink exact to="/contacto" className="navLink" activeClassName="navLinkActive" aria-current="page" >Contacto</NavLink>
                  <NavLink exact to="/cart" className="navLink" activeClassName="navLinkActive" aria-current="page" >🛒</NavLink>
                  {isAdmin
                  ?
                  <NavLink exact to="/admin" className="navLink" activeClassName="navLinkActive" aria-current="page" >admin page</NavLink>
                  :
                  <></>
                  }
                  <Login setIsAdmin={setIsAdmin} setToken={setToken}></Login>
                  
                  {token
                  ?
                  "cerrar sesion"
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
