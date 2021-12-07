import React from 'react'
import logo from '../../assets/Logo-TODO-1.webp'
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i
              ></a>
            </section>
           
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
              </p>
            </section>
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <img className="w-50" src={logo} alt="logo" />
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
    </div>
  )
}

export default Footer