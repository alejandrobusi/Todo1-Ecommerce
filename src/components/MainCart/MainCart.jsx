import React, { useState, useEffect} from 'react'
import '../MainCart/mainCart.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function MainCart() {
    const [carrito, setCarrito] = useState([]);
    const [change, setChange] = useState(false);

    const getProductcard = () =>{  
    const cartforuse = localStorage.getItem('cart');  
    setCarrito(JSON.parse(cartforuse));
    }
    const modifyQuantity = (id,sign) =>{
        let auxcarrito = carrito;
     // eslint-disable-next-line
        auxcarrito.map((item) => {
            if (item._id === id) {
                if (sign === "+") {
                    if (item.stock === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Stock insuficiente',
                            text: `De momento no contamos con esa cantidad!`,
                            confirmButtonColor : "#0B5ED7",
                          })
                    } else {
                        item.quantity = item.quantity+1;
                        item.stock= item.stock-1;
                    }
                    
                } else {
                    if (item.quantity === 1) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Opps...',
                            text: `No puede llevar menos de un articulo`,
                            confirmButtonColor : "#0B5ED7",
                          })
                    } else {
                        item.quantity = item.quantity-1;
                        item.stock= item.stock+1;
                    }
               
                }
            }
        })
            localStorage.setItem('cart',JSON.stringify(auxcarrito));
            setCarrito(auxcarrito);
            setChange(!change);
          }

          const deleteItem = (id) =>{
            let auxcarritos = carrito;
            for (let i = 0; i < auxcarritos.length; i++) {
                const item = auxcarritos[i];
      
                if (item._id === id) {
                  auxcarritos.splice(i,1)
                  localStorage.setItem('cart',JSON.stringify(auxcarritos));
                  setCarrito(auxcarritos);
                  setChange(!change);
                        }
                        
                    }}

          
   useEffect(() => {
       getProductcard()
       //console.log("Entro")
   }, [change])


   
    return (
        <div>
            {
                carrito.length>0? 
                carrito.map(item =>
                    (<div className='px-4 container animate__animated animate__bounceInUp animate__fadeInUp'>
                    <div className='cartunit row py-2 my-2'>
                        <div className='col-6 '>
                            <h4 className='cartitle'>{item.name}</h4>
                            
                        </div>
                        <div className='dummyselector col-3 col-md-1 row d-flex justify-content-center mx-0'>
                            <button className='col-2 qbutton gx-0' onClick={()=>{modifyQuantity(item._id,"-")}}>-</button>
                            <div className='quantityBox col-3  verticalign px-0' id='quantityNumber'><h4 className='cartitle'>{item.quantity}</h4></div>
                            <button className='col-2 qbutton gx-0' onClick={()=>{modifyQuantity(item._id,"+")}}>+</button>
                            <h6 className='col-12 text-center cartsubtitle'>CANTIDAD</h6>
                        </div>
                        <div className='col-2 col-md-4 text-end px-0'>
                            <h2 className='cartitle'>$ {item.price*item.quantity}</h2>
                        </div>
                        <div className='row'>
                            <h6 className='col-12 cartsubtitle'>{item.author}</h6>
                            <h6 className='col-10 col-md-10 cartsubtitle'>Stock: {item.stock}</h6>
                            <button className='col-2 col-md-2 trashbutton' onClick={()=>{deleteItem(item._id)}}>🗑️</button>
                        </div>

                    </div>
                    </div> )
                        ):
                        <div className='dummyselector  d-flex justify-content-center flex-column row mt-5'>
                            <h1 className='text-center col-12 col-md-12 mb-4'>NO HAY PRODUCTOS EN TU CARRITO</h1>
                            <Link className='d-flex justify-content-center my-5' exact to="/categories">
                                <button className='btn btn-success'>EXPLORAR ITEMS</button>
                            </Link>                          
                        </div>
                        
            }
            {carrito.length>0
            ?
            <div className='d-flex justify-content-center mt-5'>
                    <button className='align-self-center btn btn-success my-5' onClick={()=>{document.location.href = '/confirmation';}}>CONTINUAR</button>
            </div>
            :
            <></>
            }
        </div>
    )
}

export default MainCart
