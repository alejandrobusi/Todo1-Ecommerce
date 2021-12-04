import React from 'react'
import {useForm} from 'react-hook-form'
import '../AddProduct/addProduct.css'

function AddProduct() {

    const {register,formState:{errors},handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(JSON.stringify(data));
        fetch('http://localhost:8000/products', {
            method: 'POST',
             body: JSON.stringify(data),
             headers: {
                'Content-type': 'application/json',
              }
                })
        .then(response=> response.json())
        .then(json => console.log(json.status))
    }


    return (
    
        <div className='row'>
            <h1 className='my-3'>Añadir un Libro</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='col-md-6'>
            <div class="form-floating mb-3">
                <input {...register("name", { required: true })}  type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
                <textarea {...register("description", { required: true })} type="text" class="form-control descArea" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Description</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("category", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Category</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("price", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Price</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("author", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="Author"/>
                <label for="floatingPassword">Author</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("stock", { required: true })} type="number" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Stock</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("isbn", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Isbn</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("editorial", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Editorial</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("fav", { required: true })} type="boolean" class="form-control" id="floatingInput" placeholder="true or false"/>
                <label for="floatingInput">Fav</label>
            </div>
            <div class="form-floating mb-3">
                <input {...register("imgUrl", { required: true })} type="text" class="form-control" id="floatingInput" placeholder="Img URL"/>
                <label for="floatingInput">IMG URL</label>
            </div>
            <div className='d-flex justify-content-center m-3'>
            <button className='btn btn-primary' type='submit'>AÑADIR +</button>
            </div>
        </form>
        </div>

            )
        }

export default AddProduct
