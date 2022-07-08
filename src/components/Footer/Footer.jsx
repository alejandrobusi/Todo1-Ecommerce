import React from 'react'
import logo from '../../assets/logoNav.png'
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <p>
                Tienda de productos de comics - Proyecto final de la comision 11I 
              </p>
            </section>
            <section className="">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <img className="w-50" src={logo} alt="logo" />
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Integrantes</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p className="text-white">Pedro Ginel</p>
                    </li>
                    <li>
                      <p className="text-white">Alejandro Busi</p>
                    </li>
                    <li>
                      <p className="text-white">Mauro Rodriguez</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Redes</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Facebook</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Instagram</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3">
            <p>© 2021 Copyright RollingCode</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer