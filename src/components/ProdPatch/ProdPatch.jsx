import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../AddProduct/addProduct.css'
import moreItems from '../../assets/moreitems.png'

function ProdPatch(props) {
  
  const {register,formState:{errors},handleSubmit} = useForm();

  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))
  const [name, setName] = useState(props.item.name)
  
  const onInputchange= (e) => {

    setName(e.target.value)

}

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
        
            <button type="button" className="btn btn-success bi  bi-pencil-square mx-2" data-bs-toggle="modal" data-bs-target="#editItem">
              
            </button>
            <div className="modal fade" id="editItem" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Editar items</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                    <div className='row'>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form mb-3">
                            <label for="floatingInput">Nombre</label>
                            <input {...register("name", { required: true, message: "El campo es requerido"})} value={name} onChange={onInputchange} type="text" name="name" className="form-control" id="floatingInput"/>
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
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
             </div>
           </div>
       

            )
        }

export default ProdPatch
