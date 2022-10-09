import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../AddProduct/addProduct.css'
import moreItems from '../../assets/moreitems.png'
import Swal from 'sweetalert2'

function AddProduct() {
  
  const {register, formState:{errors}, handleSubmit, reset} = useForm();

  const [ token ] = useState(JSON.parse(localStorage.getItem('token')))


  const onSubmit = data => {
    
      fetch(process.env.REACT_APP_API_PRODUCTS, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'accesstoken' : token,
            'Content-type': 'application/json',
            }
          })
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Yeah...',
              text: 'Agregaste un con exito!',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Aceptar'
            }).then((result) => {
              if (result.isConfirmed) {
               reset()
              }
            })
           
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salió mal, intenta mas tarde!',
            })
          }
        })
        
    }


    return (
        <div className="card shadow col-4" >
         <img src={moreItems} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Agregar items...</h5>
            <p className="card-text">Si desea añadir items a su E-commerce puede usar esta función. haga click en el boton Añadir items para abrir un modal con el formulario.</p>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Añadir items
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Añadir items</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className='row'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form mb-3">
                            <label for="floatingInput">Nombre</label>
                            <input {...register("name", {
                              required: {value: true, message: "El campo es requerido"},
                              maxLength: { value: 40, message: "Solo puedes ingresar 40 caracteres"}
                              })} type="text" className="form-control" id="floatingInput"/>
                            {errors.name && <span className="errorColor">{errors.name.message}</span>}
                          </div>
                          <div className="form mb-3">
                            <label for="floatingInput">Descripción</label>
                            <textarea {...register("description", {
                              required: {value: true, message: "El campo es requerido"},
                              maxLength: { value: 200, message: "Solo puedes ingresar 200 caracteres"}
                              })} type="text" className="form-control descArea" id="floatingInput"/>
                            {errors.description && <span className="errorColor">{errors.description.message}</span>}
                          </div>
                          <div className="form mb-3">
                          <label for="floatingInput">Categoria</label>
                            <select className="form-select" aria-label="Default select example" {...register("category", { required: {value: true, message: "Seleccione una categoria"}})}>
                              <option  selected>Seleccionar categoria</option>
                              <option value="Camiseta">Camiseta</option>
                              <option value="Vaso">Vaso</option>
                              <option value="Comic">Comic</option>
                              <option value="Juguete">Juguete</option>
                              <option value="Accesorio DC">Accesorio DC</option>
                              <option value="Accesorio Marvel">Accesorio Marvel</option>
                              <option value="Otros">Otros</option>
                            </select>
                            {errors.category && <span className="errorColor">{errors.category.message}</span>}
                          </div>
                          <div className="form mb-3">
                            <label for="floatingInput">Precio</label>
                            <input {...register("price", {
                              required: {value: true, message: "El campo es requerido"},
                              max: {value: 1000000,  message: "No puedes ingresar un precio mayor a 1.000.000"},
                              min: {value: 0,  message: "No puedes ingresar numeros negativos"} 
                              })}type="number" className="form-control" id="floatingInput"/>
                            {errors.price && <span className="errorColor">{errors.price.message}</span>}
                          </div>
                          <div className="form mb-3">
                            <label for="floatingInput">Stock</label>
                            <input {...register("stock", { 
                              required: {value: true, message: "El campo es requerido"},
                              max: {value: 10000,  message: "No puedes ingresar un precio mayor a 10.000"},
                              min: {value: 0,  message: "No puedes ingresar numeros negativos"} 
                              })} type="number"  className="form-control" id="floatingInput"/>
                            {errors.stock && <span className="errorColor">{errors.stock.message}</span>}
                          </div>
                          <div className="form mb-3">
                            <label for="floatingInput">Imagen (URL)</label>
                            <input {...register("imgUrl", { required: true })} type="text" className="form-control" id="floatingInput"/>
                            {errors.imgUrl && <span className="errorColor">{errors.imgUrl.message}</span>}
                          </div>
                          <div className='d-flex justify-content-center m-3'>
                          <button className='btn btn-primary' type='submit'>AÑADIR +</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
             </div>
           </div>
        </div>
      )
    }

export default AddProduct
