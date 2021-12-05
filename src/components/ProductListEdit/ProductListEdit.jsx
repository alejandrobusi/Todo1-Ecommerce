import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import editItem from '../../assets/editItem.png'

function ProductListEdit(props) {
  
  const [products, setProducts] = useState([])
  
  const token = props.token
  
  const getItems = () => {
    fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((json) => setProducts(json));
  }

  useEffect(() => {

    getItems()
    
    }, [])

  const deleteItem = (id, token) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/products`, {
          method: 'DELETE',
            body: JSON.stringify({
              id: id,
            }), 
          headers:{
            'accesstoken': token,
            'Content-Type': 'application/json'
          }
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


  return (
    <div>
      <div class="card shadow col-3" >
         <img src={editItem} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Editar/eliminar items...</h5>
            <p class="card-text">Si desea editar o eliminar items a su E-commerce puede usar esta función. haga click en el boton lista items para abrir un modal con la lista.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#listAdm">
              Lista items
            </button>
              <div class="modal fade" id="listAdm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">lista items</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="container-fluid">
                      <div className='row'>                  
                        {products.length > 0
                        ?
                        <table class="table">
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
                              <td><div><i onClick={()=> {deleteItem(item._id, token)}} class="bi bi-trash"></i><i onClick={()=> {alert("editar")}} class="bi bi-pencil-square mx-2"></i></div></td>
                            </tr>
                          )}
                          </tbody>
                        </table>
                        :
                        <h1>Cargando</h1>
                        }
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

export default ProductListEdit
