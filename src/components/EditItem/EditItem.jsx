import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function EditItem() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const {register, formState:{errors}, handleSubmit, setValue} = useForm();
  
  const getItems = () => {
    fetch(`${process.env.REACT_APP_API_PRODUCTS}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      setIsLoading(true);
      const { name, description, category, price, quantity, stock, imgUrl } = json;
      setValue('name', name)
      setValue('description', description)
      setValue('price', price)
      setValue('category', category)
      setValue('quantity', quantity)
      setValue('stock', stock)
      setValue('imgUrl', imgUrl)
    });
  }
  
  useEffect(() => {
    getItems()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const [ token ] = useState(JSON.parse(localStorage.getItem('token')))
  
  const onSubmit = data => {
    fetch(`${process.env.REACT_APP_API_PRODUCTS}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'accesstoken' : token,
        'Content-type': 'application/json',
      }           
    })
    .then(res => res.json())
    .then(json => {
      if (json.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Yeah...',
          text: 'El item se editó correctamente!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            document.location.href = '/admin'
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
    <div className="container-fluid d-flex justify-content-center">
      {isLoading
      ?
      <div className="card shadow col-6 my-5">
        <div className="card-header">
          <strong>Editar</strong>
        </div>
        <div className="card-body">
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
                  }
                )} type="text" className="form-control descArea" id="floatingInput" />
                {errors.description && <span className="errorColor">{errors.description.message}</span>}
            </div>
            <div className="form mb-3">
            <label for="floatingInput">Categoria</label>
              <select className="form-select" aria-label="Default select example" {...register("category", {required: {value: true, message: "Seleccione una categoria"}})}>
                <option disabled >Seleccionar categoria</option>
                <option selected={"Camiseta"} value="Camiseta">Camiseta</option>
                <option selected={"Vaso"} value="Vaso">Vaso</option>
                <option selected={"Comic"} value="Comic">Comic</option>
                <option selected={"Juguete"} value="Juguete">Juguete</option>
                <option selected={"Accesorio DC"} value="Accesorio DC">Accesorio DC</option>
                <option selected={"Accesorio Marvel"} value="Accesorio Marvel">Accesorio Marvel</option>
                <option selected={"Otros"} value="Otros">Otros</option>
              </select>
              {errors.category && <span className="errorColor">{errors.category.message}</span>}
            </div>
            <div className="form mb-3">
                <label for="floatingInput">Precio</label>
                <input {...register("price", { 
                  required: {value: true, message: "El campo es requerido"},
                  max: {value: 1000000,  message: "No puedes ingresar un precio mayor a 1.000.000"},
                  min: {value: 0,  message: "No puedes ingresar numeros negativos"}
                  })} type="number" className="form-control" id="floatingInput"/>
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
              <button className='btn btn-success' type='submit'>Guardar</button>
            </div>
          </form>
        </div>
      </div>
      :
      <div className="spinner-border text-success my-5" role="status">
        <span className="visually-hidden" >Loading...</span>
      </div>
      }
    </div>
  )
}

export default EditItem
