import React, { useState, useEffect } from 'react'
import CatCard from '../CatCard/CatCard'
import '../Categories/categories.css'

function Categories(props) {
  
  const [categoryItems, setCategoryItems] = useState([])
  const [titleCategory, setTitleCategory] = useState("Selecciona una categoria")

  
  useEffect(() => {
  
    setCategoryItems(props.items)
  },[props])


  const handleFilterCat = (cat) => {
    const itemsMap = []
     props.items.forEach( (item) => {
      if (item.category.toLowerCase() === cat.toLowerCase()) {
        itemsMap.push(item)
      }      
    })
    setTitleCategory(itemsMap[0].category)
    setCategoryItems(itemsMap)
  }
  const handleEverything = () => {
    
    setCategoryItems(props.items)
    setTitleCategory("Todos")
    
  }
  
  const handleFeatured = () => {
    const itemsFav = []
     props.items.forEach( (item) => {
      if (item.fav) {
        itemsFav.push(item)
      }

    })
    setTitleCategory("Destacados")
    setCategoryItems(itemsFav)
  }
  
  return (
    <div>
      <section className="my-5 py-5">
        <div className="rounded-3 text-center boxShadowFull container">
          <div className="card-header borderR bgCat rounded-5">
            <ul className="nav nav-pills card-header-pills justify-content-between align-items-center">
              <li>
                <h3 className="titleFilter text-white">Ver por categorias</h3>
              </li>
              <li>
                <h4 className="fs-1 text-white">{titleCategory}</h4>
              </li>
              <li>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" onClick={() => {handleEverything()}} className="btn btn-dark">Todos</button>
                  <button type="button" onClick={() => {handleFeatured()}} className="btn btn-dark">Destacados</button>
                  <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorias
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="btnGroupDrop1">
                      <li className="dropdown-item" onClick={() => {handleFilterCat("novela")}}>Novela</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("ciencias politicas")}}>Ciencias politicas</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("ficción")}}>Ficción</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("infantiles")}}>Infantiles</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("terror y suspenso")}}>Terror y suspenso</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("clásicos")}}>Clásicos</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("desarrollo personal")}}>Desarrollo personal</li>
                      <li className="dropdown-item" onClick={() => {handleFilterCat("novedades")}}>Novedades</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="card-body row justify-content-center col-lg-12 g-0">
            {categoryItems.length > 0
            ?
            categoryItems.map( item =><CatCard item={item}/>)
            :
            <h1>Cargando</h1>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories
