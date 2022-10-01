import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../CatCard/carCard.css'
import { setLocalStorage } from '../../helpers/helper'


function CatCard(props) {

  const { name, description, price, imgUrl, _id } = props.item
  
  const badgeData = JSON.parse(localStorage.getItem('cart'))

  const [badge, setBadge] = useState(badgeData)
  
  const filter = badge.findIndex((x) => x._id === _id)
  
  const [item, setItem] = useState(0)

  const [onOff, setOnOff] = useState(true)

  useEffect(() => {
    setBadge(JSON.parse(localStorage.getItem('cart')))
  
  }, [onOff])
  
  
  useEffect(() => {
    
    if (filter !== -1) {
      setItem(badge[filter].quantity)
    }
  }, [badge, filter, onOff])
  

  let history = useHistory()

  const handleClick = () => {
    
  history.push(`/detail/${_id}`)

  }
  
  return (
    <div className="row g-0 card shadow mb-3 align-items-center justify-content-between animate__animated animate__bounceIn mx-1 g-0 col-lg-5">
      <div className="col-md-4">
        <img src={imgUrl} className="img-fluid w-100 rounded-start" alt="img-Book"/>
      </div>
      <div className="col-md-8">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text truncate">{description}</p>
          <h3 className="card-text fw-bold"><small className="text-muted">$ {price}</small></h3>
          <div>
            <button type="button" onClick={handleClick} className="btn btn-dark mt-2 mx-2">Ver mas</button>
            {item >= 1
            ?
            <button type="button" onClick={() => {
              setLocalStorage(props.item)
              setOnOff(!onOff)
              }} className="btn btn-dark mt-2 position-relative">
              Añadir &#x1f6d2;
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                *
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            :
            <button type="button" onClick={() => {
              setLocalStorage(props.item)
              setOnOff(!onOff)
            }} className="btn btn-dark mt-2">Añadir &#x1f6d2;</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatCard
