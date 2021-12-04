import React, { useState, useEffect} from 'react'
import '../ConfirmedCart/confirmedCart.css'
import { useForm } from "react-hook-form";




function ConfirmedCart() {
    const cartforuse = localStorage.getItem('cart');
    const [carrito, setCarrito] = useState([]);
    const [change, setChange] = useState(false);
    const [suma, setSuma] = useState(0)
    const getProductcard = () =>{  
    setCarrito(JSON.parse(cartforuse));
    }
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        const purchase = {
            ...data,
            items: JSON.parse(cartforuse)
        }    
        localStorage.setItem('cart', JSON.stringify([]));        
        fetch('http://localhost:8000/purchases', {
            method: 'POST',
             body: JSON.stringify(purchase),
             headers: {
                'Content-type': 'application/json',
              }
                })
        .then(response=> response.json())
        .then(json => console.log(json.status))
        
        localStorage.setItem('cart', JSON.stringify([]))
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

    const backhome = ()=>{
        
    }
    
   useEffect(() => {
       getProductcard()
       checkoutCart()
       //console.log("Entro")
   }, [change])

//    useEffect(() => {
//     sendData()
//     //console.log("Entro")
// }, [purchase])


   
    return (

        
        <div className='row flex-column justify-content-center animate__animated animate__bounceIn align-items-center'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column p-3'>
                <h1 className='my-4 text-center'>INFO DE CONTACTO</h1>
                <h3 >Nombre</h3><input className='inputs' name='nombre' {...register('nombre', {required:true,maxLength:20})}  placeholder="Nombre" type="text" />
                <h3 >Apellido</h3><input className='inputs' name='apellido' {...register('apellido', {required:true,maxLength:20})} placeholder="Apellido" type="text" />
                <h3 >Telefono</h3><input className='inputs' name='telefono' {...register('telefono', {required:true,maxLength:20})} placeholder="Telefono" type="text" />
                <h3 >Email</h3><input className='inputs' name='email' {...register('email', {required:true,maxLength:20})} placeholder="Email" type="text" />

                <h1 className='my-4 text-center'>INFO DE ENVIO</h1>
                <h3 >Calle</h3><input className='inputs' name='calle'  {...register('calle', {required:true,maxLength:20})} placeholder="Calle" type="text" />
                <h3 >Altura</h3><input className='inputs' name='altura' {...register('altura', {required:true,maxLength:20})} placeholder="Altura" type="text" />
                <h3 >Piso</h3><input className='inputs' name='piso' {...register('piso')} placeholder="Piso" type="text" />
                <h3 >Unidad</h3><input className='inputs' name='unidad' {...register('unidad')} placeholder="Nombre" type="text" />
                

                <div className='col-md-12'>
                <h1 className='text-center my-4'>RESUMEN</h1>
            {
                carrito.length>0? carrito.map(book =>
                    (<div className='p-3'>
                    <div className='cartunit row pt-2'>
                        <div className='col-12 '>
                            <h4 className='cartitle'>{book.quantity}x {book.name}</h4>  
                        </div>
                        <div className='row justify-content-start'>
                            <div className='col-6'>
                            <h6 className='cartsubtitle'>{book.author}</h6>    
                            <h6 className='cartsubtitle'>Stock: {book.stock}</h6>
                            </div>
                            <h2 className=' col-6 cartitle text-end'>$ {book.price*book.quantity}</h2>
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
                <button className='mx-3 btn btn-secondary' >MODIFICAR</button>                        
                <button type='submit' className='align-middle btn btn-primary'>SUBMIT</button>
              
            </div>

                </form> 
            </div>
        </div>
    )
}

export default ConfirmedCart
