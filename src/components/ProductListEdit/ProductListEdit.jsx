import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import editItem from '../../assets/editItem.png'

function ProductListEdit(props) {
  
  const [products, setProducts] = useState([])
  const [flagGetItelms, setFlagGetItelms] = useState(false);
  const [statusRes, setStatusRes] = useState()
  
  const token = props.token
  
  const getItems = () => {
    fetch(process.env.REACT_APP_API_PRODUCTS)
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  
  const deleteItem = (id, token) => {
    Swal.fire({
      title: 'Estas seguro?',
      showDenyButton: true,
      confirmButtonText: 'si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(process.env.REACT_APP_API_PRODUCTS, {
          method: 'DELETE',
          body: JSON.stringify({
            id: id,
          }), 
          headers:{
            'accesstoken': token,
            'Content-Type': 'application/json'
            }
          })
          .then(res => {
            setStatusRes(res.status)
            return res.json()
            })
          .then(json => json.json)
          if (statusRes === 200) {
            setFlagGetItelms(!flagGetItelms);
            Swal.fire({
              icon: 'success',
              title: 'Yeah...',
              text: 'Agregaste un con exito!',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Aceptar'
            })
          .then((result) => {
            if (result.isConfirmed) {
            }
          })
        }
          Swal.fire('Eliminado', '', 'info')
        } else if (result.isDenied) {
          Swal.fire('Sin cambios', '', 'info')
        }
    })

  }
    
    
  useEffect(() => {

    getItems()
    
  },)
   
  let history = useHistory()

  const handleClick = (id) => {
    history.push(`/edit/${id}`)
  }
  
  return (
      <div className="card shadow col-4 mx-5" >
         <img src={editItem} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Editar/eliminar items...</h5>
            <p className="card-text">Si desea editar o eliminar items a su E-commerce puede usar esta función. haga click en el boton lista items para abrir un modal con la lista.</p>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#listAdm">
              Lista items
            </button>
              <div className="modal fade" id="listAdm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">lista items</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                      <div className='row'>                  
                        {products.length > 0
                        ?
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">name</th>
                              <th scope="col">price</th>
                              <th scope="col">Stock</th>
                              <th scope="col">opciones</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          {products.map( item =>  
                            <tr>
                              <td>{item.name}</td>
                              <td>${item.price}</td>
                              <td>{item.stock}</td>
                              <td>
                                <div className="d-flex">
                                  <button type="button" className="btn btn-success bi bi-trash" onClick={()=> {deleteItem(item._id, token)}}></button>
                                  <button type="button" className="btn btn-success bi bi-pencil-square mx-2" data-bs-dismiss="modal" onClick={()=> {handleClick(item._id)}}></button>
                                </div>
                              </td>
                            </tr>
                          )}
                          </tbody>
                        </table>
                        :
                        <h1>Cargando</h1>
                        }
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

export default ProductListEdit
