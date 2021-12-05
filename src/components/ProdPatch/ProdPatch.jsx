import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../AddProduct/addProduct.css'
import moreItems from '../../assets/moreitems.png'

function ProdPatch(props) {
  
  const {register,formState:{errors},handleSubmit} = useForm();

  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))

  const onSubmit = data => {
      fetch('http://localhost:8000/products', {
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'accesstoken' : token,
            'Content-type': 'application/json',
            }
          })
        .then(response=> response.json())
        .then(json => console.log(json))
    }


    return (
    
      <div>
        <div class="card shadow col-3" >
         <img src={moreItems} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Editar item...</h5>
            <p class="card-text">Si desea añadir items a su E-commerce puede usar esta función. haga click en el boton Añadir items para abrir un modal con el formulario.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Editar item
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Editar items</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                    <div className='row'>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form mb-3">
                            <label for="floatingInput">Nombre</label>
                            <input {...register("name", { required: true, message: "El campo es requerido"})}  type="text" name="name" className="form-control" id="floatingInput"/>
                            {errors.name && <span className="errorColor">{errors.name.message}</span>}
                        </div>
                        <div className="form mb-3">
                            <label for="floatingInput">Descripción</label>
                            <textarea {...register("description", { required: true })} type="text" className="form-control descArea" id="floatingInput"/>
                        </div>
                        <div className="form mb-3">
                        <label for="floatingInput">Categoria</label>
                          <select className="form-select" aria-label="Default select example" {...register("category", { required: true })}>
                            <option  selected>Seleccionar categoria</option>
                            <option value="Camiseta">Camiseta</option>
                            <option value="Vaso">Vaso</option>
                            <option value="Comic">Comic</option>
                            <option value="Juguete">Juguete</option>
                            <option value="Accesorio DC">Accesorio DC</option>
                            <option value="Accesorio Marvel">Accesorio Marvel</option>
                            <option value="Otros">Otros</option>
                          </select>
                        </div>
                        <div className="form mb-3">
                            <label for="floatingInput">Precio</label>
                            <input {...register("price", { required: true })} type="text" className="form-control" id="floatingInput"/>
                        </div>
                        <div className="form mb-3">
                            <label for="floatingInput">Stock</label>
                            <input {...register("stock", { required: true })} type="number"  min="1"  className="form-control" id="floatingInput"/>
                        </div>
                        <div className="form mb-3">
                            <label for="floatingInput">Imagen (URL)</label>
                            <input {...register("imgUrl", { required: true })} type="text" className="form-control" id="floatingInput"/>
                        </div>
                        <div className='d-flex justify-content-center m-3'>
                        <button className='btn btn-primary' type='submit'>AÑADIR +</button>
                        </div>
                      </form>
                    </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
             </div>
           </div>
        </div>
      </div>
        

            )
        }

export default ProdPatch
