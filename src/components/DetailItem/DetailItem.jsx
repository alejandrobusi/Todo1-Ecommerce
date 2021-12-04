import React, { useState, useEffect } from 'react'
import '../DetailItem/detailItem.css'
import { useParams } from 'react-router-dom'
import { setLocalStorage, setFavLocalStorage, toBuy } from '../../helpers/helper'


function DetailItem(props) {
  
  const getLocal = JSON.parse(localStorage.getItem('fav'))
  let { id } = useParams()
  const [book, setBook] = useState({})
  const [isFav, setIsFav] = useState()

  useEffect(() => {
    setBook(props.item) 
  }, [props])

  const favs = (getLocal) => {
    const filter = getLocal.find((x) => x.id === id)
    setFavLocalStorage(book._id)
    if (filter) {
      setIsFav(true)
    } else {
      setIsFav(false)
    }
  }


  return (
    <div className="container my-5">
      {book?(
      <div>
        <div className="animate__animated animate__bounceIn card shadow mb-3" >
          <div className="row g-0">
            <div className="col-md-2">
              <img src={book.imgUrl} className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title fs-1">{book.name}</h5>
                <p className="card-text">{book.description}</p>
                <div className="d-flex justify-content-end">
                  <h3 className="align-items-end fw-bold">$ {book.price}</h3>
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
        {/* DETALLES */}
        <div class="animate__animated animate__bounceIn card shadow">
          <div class="card-header">
          <strong> Detalles de {book.name} &#x1f4d6;</strong> 
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Autor</p>
              <footer class="blockquote-footer">{book.author}</footer>
            </blockquote>
            <blockquote class="blockquote mb-0">
              <p>Editorial</p>
              <footer class="blockquote-footer">{book.editorial}</footer>
            </blockquote>
            <blockquote class="blockquote mb-0">
              <p>ISBN</p>
              <footer class="blockquote-footer">{book.isbn}</footer>
            </blockquote>
            <blockquote class="blockquote mb-0">
              <p>Precio</p>
              <footer class="blockquote-footer">$ {book.price}</footer>
            </blockquote><blockquote class="blockquote mb-0">
              <p>Stock</p>
              <footer class="blockquote-footer">{book.stock} Unidades</footer>
            </blockquote>
          </div>
        </div>
      </div>
              ): <div className="text-center"><h1>cargando</h1></div>} 
    </div>
  )
}

export default DetailItem