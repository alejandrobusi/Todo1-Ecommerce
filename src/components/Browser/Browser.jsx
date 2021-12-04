import React  from 'react'
import '../Browser/browser.css'
import CatCard from '../CatCard/CatCard'


function Browser({setSearchText, auxProduct, products}) {


  return (
    <div>
      <section className="my-5 py-5">
        <div className="rounded-3 text-center boxShadowFull container">
          <div className="card-header borderR rounded-5 bgCat">
            <ul className="nav nav-pills bgCat card-header-pills justify-content-center">
             <div class="col-sm-3 mx-2">
              <input type="text" onChange={(e) => {setSearchText(e.target.value)}} class="form-control" placeholder="Buscar"/>
             </div>
            </ul>
          </div>
          <div className="card-body row justify-content-center col-lg-12 g-0">
            {auxProduct.length > 0?auxProduct.map( item =><CatCard item={item}/>):products.map( item =><CatCard item={item}/>)}
          </div>
        </div>
      </section>
      <script data-num-rows = "2" src = "https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js" type = "text / javascript"> </script>

    </div>
  )
}

export default Browser
