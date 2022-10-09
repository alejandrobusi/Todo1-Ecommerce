import React, { useState, useEffect} from 'react'
import '../ConfirmedCart/confirmedCart.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function ConfirmedCart() {

    const cartforuse = JSON.parse(localStorage.getItem('cart'));
 
    const [ change ] = useState(false);

    const [suma, setSuma] = useState(0)

    let statusCode = null;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const purchase = {
            ...data,
            items: cartforuse
        }          
        fetch(process.env.REACT_APP_API_PURCHASE, {
            method: 'POST',
             body: JSON.stringify(purchase),
             headers: {
                'Content-type': 'application/json',
              }
                })
        .then(res => {
            statusCode = res.status
            return res.json()
            })
        .then(response => {
            if (statusCode === 200) {
                Swal.fire({
                  icon: 'success',
                  title: 'Yeah...',
                  text: 'La compra se realizó con exito!',
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Aceptar'
                }).then((result) => {
                  if (result.isConfirmed) {
                    const cart = [];
                    localStorage.removeItem('cart')
                    localStorage.setItem('cart', JSON.stringify(cart))
                    document.location.href = '/home'
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
    
    const checkoutCart = ()=> {
        const cartforuse = JSON.parse(localStorage.getItem('cart'));
        let sumador = 0
        for (let i = 0; i < cartforuse.length; i++) {
            const element = cartforuse[i];
            const quantity = element.quantity
            const price = element.price
            const mult = quantity*price
            sumador+=mult
            setSuma(sumador)
        }
    }

   useEffect(() => {
       checkoutCart()
   }, [change])



   
    return (
        <div className="container">
            <div className='row flex-column justify-content-center animate__animated animate__bounceIn align-items-center'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column p-3'>
                    <h1 className='modal-title fw-bold fs-1'>INFO DE CONTACTO</h1>
                    <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input className='form-control' name='nombre' {...register('name', {required:true,maxLength:20})}  placeholder="Nombre" type="text" />
                    <label for="exampleFormControlInput1" className="form-label">Apellido</label>
                    <input className='form-control' name='apellido' {...register('lastName', {required:true,maxLength:20})} placeholder="Apellido" type="text" />
                    <label for="exampleFormControlInput1" className="form-label">Telefono</label>
                    <input className='form-control' name='telefono' {...register('telephone', {required:true,maxLength:20})} placeholder="Telefono" type="text" />
                    <label for="exampleFormControlInput1" className="form-label">Correo</label>
                    <input className='form-control' name='email' {...register('email', {required:true,maxLength:30})} placeholder="Email" type="text" />

                    <h1 className='modal-title fw-bold fs-1'>INFO DE ENVIO</h1>
                    <label for="exampleFormControlInput1" className="form-label">Calle</label>
                    <input className='form-control' name='calle'  {...register('street', {required:true,maxLength:20})} placeholder="Calle" type="text" />
                    <label for="exampleFormControlInput1" className="form-label">Altura</label>
                    <input className='form-control' name='altura' {...register('height', {required:true,maxLength:20})} placeholder="Altura" type="text" />
                    <label for="exampleFormControlInput1" className="form-label">Departamento</label>
                    <input className='form-control' name='piso' {...register('apartment')} placeholder="Piso" type="text" />

                    <div className='col-md-12'>
                    <h1 className='modal-title fw-bold fs-1'>RESUMEN</h1>
                {
                    cartforuse.length>0? cartforuse.map(item =>
                        (<div className='p-3'>
                        <div className='cartunit row pt-2'>
                            <div className='col-12 '>
                                <h4 className='cartitle'>{item.quantity}x {item.name}</h4>  
                            </div>
                            <div className='row justify-content-start'>
                                <div className='col-6'>
                                <h6 className='cartsubtitle'>{item.author}</h6>    
                                <h6 className='cartsubtitle'>Stock: {item.stock}</h6>
                                </div>
                                <h2 className=' col-6 cartitle text-end'>$ {item.price*item.quantity}</h2>
                            </div>

                        </div>
                        </div> )
                            ):
                            <div className=''>
                                <h1 className='text-center col-12 col-md-12 mb-4'>COMPRA REALIZADA CON EXITO</h1>                      
                            </div>
                            
                }


                </div>
                <div className='col-md-12 text-end '>
                    <h1>TOTAL ${suma}</h1>
                </div>

                <div className= 'd-flex justify-content-center align-middle mt-4'>                    
                    <button type='submit' className='align-middle btn btn-success'>Comprar</button>
                </div>

                </form> 
            </div>
            </div>
        </div>
    )
}

export default ConfirmedCart
