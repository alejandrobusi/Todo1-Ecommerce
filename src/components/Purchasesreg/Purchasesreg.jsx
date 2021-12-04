import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Purchasesreg/purchasesreg.css'

function Purchasesreg() {

    const [list, setlist] = useState([]);


    const getList = () =>{
        fetch('http://localhost:8000/purchases')
            .then((response) => response.json())
            .then((json) => setlist(json));
            
        }
    
        useEffect(() => {

            getList()
          
            }, [])

    return (
        <div>
            {
                list.length>0?list.map(item =>
                    (<div className='row p-3 purchasebox m-3'>
                        <div className='col-md-6 col-6'>
                            <h5 className='datatext'>Nombre: {item.nombre}</h5>
                            <h5 className='datatext'>Calle: {item.calle}</h5>
                            <h5 className='datatext'>Apellido: {item.apellido}</h5>
                            <h5 className='datatext'>Altura: {item.altura}</h5>
                            <h5 className='datatext'>Piso: {item.piso}</h5>
                            <h5 className='datatext'>Unidad: {item.unidad}</h5>
                            <h5 className='datatext'>Telefono: {item.telefono}</h5>
                            <h5 className='datatext'>Email: {item.email}</h5>
                        </div>
                        <div className='col-md-6 col-5 itembox'>
                            {

                                item.items.map(book => (
                                    <div className=''>
                                        <h5 className='itemfont'>{book.quantity}x {book.name} $ {book.price*book.quantity}</h5>
                                        <h5></h5>
                                    </div>                                    
                                ))
                            }
                        </div>
                    </div> )
                        ):
                        <div className='dummyselector d-flex justify-content-center flex-column  mt-2'>
                            <h1 className='text-center col-12 col-md-12 mb-4'>NO EXISTEN COMPRAS REGISTRADAS</h1>
                            <Link exact className="text-center" to="/categories">
                                <button className='align-self-center my-5 btn btn-primary'>EXPLORAR LIBROS</button>
                            </Link>                          
                        </div>
                        
            }
        </div>
    )
        }
export default Purchasesreg
