import React, { useState, useEffect } from 'react'
import '../DetailItem/detailItem.css'
import { useParams } from 'react-router-dom'
import { setLocalStorage, setFavLocalStorage, toBuy } from '../../helpers/helper'


function DetailItem(props) {
  
  const getLocal = JSON.parse(localStorage.getItem('fav'))
  let { id } = useParams()
  const [item, setItem] = useState({})
  const [isFav, setIsFav] = useState()

  useEffect(() => {
    setItem(props.item) 
  }, [props])

  const favs = (getLocal) => {
    const filter = getLocal.find((x) => x.id === id)
    setFavLocalStorage(item._id)
    if (filter) {
      setIsFav(true)
    } else {
      setIsFav(false)
    }
  }


  return (
    <div className="container my-5">
      {item?(
      <div>
        <div className="animate__animated animate__bounceIn card shadow mb-3" >
          <div className="row g-0">
            <div className="col-md-2">
              <img src={item.imgUrl} className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title fs-1">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-end">
                  <h3 className="align-items-end fw-bold">$ {item.price}</h3>
                </div>
                <div className="d-flex justify-content-end">
                {
                  isFav
                  ? <button type="button" onClick={ () => {favs(getLocal)}} className="btn btn-dark">Añadir &#x1f496;</button>
                  : <button type="button" onClick={ () => {favs(getLocal)}} className="btn btn-dark">Quitar &#x1f494;</button>
                }
                  <button type="button" onClick={() => {setLocalStorage(props.item)}} className="btn btn-dark mx-2">Añadir &#x1f6d2;</button>
                  <button type="button"  onClick={ () => {toBuy(props.item)}} className="btn btn-dark">Comprar &#x1f4b3;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__bounceIn card shadow">
          <div className="card-header">
          <strong> Detalles de {item.name}</strong> 
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Categoria</p>
              <footer className="blockquote-footer">{item.category}</footer>
            </blockquote>
            <blockquote className="blockquote mb-0">
              <p>Precio</p>
              <footer className="blockquote-footer">$ {item.price}</footer>
            </blockquote><blockquote className="blockquote mb-0">
              <p>Stock</p>
              <footer className="blockquote-footer">{item.stock} Unidades</footer>
            </blockquote>
          </div>
        </div>
      </div>
              ): <div className="text-center"><h1>cargando</h1></div>} 
    </div>
  )
}

export default DetailItem