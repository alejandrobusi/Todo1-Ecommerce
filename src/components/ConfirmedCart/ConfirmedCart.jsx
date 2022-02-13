import React, { useState, useEffect} from 'react'
import '../ConfirmedCart/confirmedCart.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';




function ConfirmedCart() {

    const cartforuse = JSON.parse(localStorage.getItem('cart'));
    console.log(cartforuse)
 
    const [change, setChange] = useState(false);

    const [suma, setSuma] = useState(0)

    const [statusRes, setStatusRes] = useState()

    const {register, handleSubmit, errors, reset} = useForm();
    const onSubmit = data => {
        const purchase = {
            ...data,
            items: cartforuse
        }          
        console.log(purchase)
        fetch('http://localhost:8000/purchases', {
            method: 'POST',
             body: JSON.stringify(purchase),
             headers: {
                'Content-type': 'application/json',
              }
                })
        .then(res => {
            setStatusRes(res.status)
            return res.json()
            })
        .then(json => console.log(json))
        if (statusRes === 200) {
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

        
        <div className='row flex-column justify-content-center animate__animated animate__bounceIn align-items-center'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column p-3'>
                    <h1 className='modal-title fw-bold fs-1'>INFO DE CONTACTO</h1>    
                    <input className='form-control my-1' name='nombre' {...register('name', {required:true,maxLength:20})}  placeholder="Nombre" type="text" />
                    <input className='form-control my-1' name='apellido' {...register('lastName', {required:true,maxLength:20})} placeholder="Apellido" type="text" />
                    <input className='form-control my-1' name='telefono' {...register('telephone', {required:true,maxLength:20})} placeholder="Telefono" type="text" />
                    <input className='form-control my-1' name='email' {...register('email', {required:true,maxLength:30})} placeholder="Email" type="text" />
                    <h1 className='modal-title fw-bold fs-1 mt-4 border-top'>INFO DE ENVIO</h1>
                    <input className='form-control my-1' name='calle'  {...register('street', {required:true,maxLength:20})} placeholder="Calle" type="text" />
                    <input className='form-control my-1' name='altura' {...register('height', {required:true,maxLength:20})} placeholder="Altura" type="text" />
                    <input className='form-control my-1' name='piso' {...register('apartment')} placeholder="Piso" type="text" />

                    <div className='col-md-12 mt-4 border-top'>
                    <h1 className='modal-title fw-bold fs-1  mb-2'>TU COMPRA</h1>
                {
                    cartforuse.length>0? cartforuse.map(item =>
                        (<div className='p-1'>
                        <div className='cartunit row pt-2'>
                            <div className='col-12 '>
                                <h5 className='cartitle'>{item.quantity}x{item.name}</h5>  
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6 className='cartsubtitle'>Stock: {item.stock}</h6>
                                <h3 className='cartitle text-end'>$ {item.price*item.quantity}</h3>
                            </div>

                        </div>
                        </div> )
                            ):
                            <div>
                                <h1 className='text-center col-12 col-md-12 mb-4'>COMPRA REALIZADA CON EXITO</h1>                      
                            </div>
                            
                }


                </div>
                <div className='col-md-12 text-end mt-2 border-top'>
                    <h3 className="mt-2">TOTAL ${suma}</h3>
                </div>

                <div className= 'd-flex justify-content-center align-middle mt-4'>                    
                    <button type='submit' className='align-middle btn btn-success'>Comprar</button>
                </div>

                </form> 
            </div>
        </div>
    )
}

export default ConfirmedCart
