import React, { useEffect, useState } from "react";
import "./prodDestacados.css";

function ProdDestacados() {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await getProducts();
  }, []);
  
  const getProducts = async () => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((e) => console.log(e));
  };
  return (
    <div className="container-carrousel">
      <div>
        <h1>Destacados</h1>
      </div>
      <div className="container-fluid">
        <div
          id="carouselCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
          {products
              .filter((producto) => producto.fav === true)
              .map((p,index) => {
                return(
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to={index}
              className={index === 0? `active` : ``}

              aria-current={index === 0? "true" : ""}
              aria-label={`Slide ${index+1}`}

            ></button>)})}
          </div>
          <div className="carousel-inner">
          {products
              .filter((producto) => producto.fav === true)
              .map((p,index) => {
                return (
                  <div className={index === 0? `carousel-item active`:`carousel-item`}
                  >
                    <img
                      src={p.imgUrl}
                      className="d-block w-100 size"
                      alt={p.name}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <a
                        href="........."
                        target="_blank"
                        className="text-dark fw-bold fs-4 >.fs-4"
                      >
                        {p.name}
                      </a>
                      <h5 className="text-dark"></h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdDestacados;
