import React from 'react'
import logo from '../../assets/Logo-TODO-1.webp'
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
          <div className="container p-4">  
            <section className="mb-4">
              <p>
                E-commerce Todo1 Prueba Tecnica.
              </p>
            </section>
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <img className="w-50" src={logo} alt="logo" />
                </div>
                
                
              </div>
            </section>
          </div>
          <div className="text-center p-3">
            © 2021 Copyright: Alejandro Busi
          </div>
        </footer>
    </div>
  )
}

export default Footer