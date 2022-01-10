import React from 'react'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form"

function RegisterForm() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    if (data.password === data.password2) {
      fetch(`http://localhost:8000/users`,{
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            Swal.fire({
              title: 'Yeah...',
              text: 'Usuario creado con exito!',
              icon: 'success',
              confirmButtonColor: '#198754',
              confirmButtonText: 'OK!'
            }).then((result) => {
              if (result.isConfirmed) {
                document.location.href = '/home'
              }
            })
          } else {
            if (res.errors[0].param === "email") {
              console.log(res.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El email "${res.errors[0].value}" ya está registrado!`,
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Algo ha sucedido, intenta mas tarde!`,
              })
            }
          }
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
      })
    }
  }


  return (
    <div class="card animate__animated animate__bounceIn shadow col-4">
      <div class="card-header">
        <h5 className="modal-title fw-bold fs-1">Registrarme</h5>
      </div>
      <div class="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input className="form-control" type="text" name="name" placeholder="Ingresa tu nombre" minLength="7" maxLength="15" {...register("name", {required: { value: true, message: "El campo es requerido"}, maxLength: { value: 15, message: "Demasiado largo" }})} />
            {errors.name && <span className="errorColor">{errors.name.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" name="email" placeholder="Ingresa tu email" minLength="7" maxLength="50" {...register("email", {required: { value: true, message: "El campo es requerido"}, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "El formato no es correcto" },  minLength: { value: 7, message: "Demasiado corto" }})} />
            {errors.email && <span className="errorColor">{errors.email.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input className="form-control" type="password"  name="password" placeholder="Ingresa tu contraseña" minLength="6" maxLength="12" {...register("password", {required: { value: true, message: "La contraseña es requerida" }, minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }})} />
            {errors.password && <span className="errorColor">{errors.password.message}</span>} 
          </div>
          <div className="mb-3">
            <label className="form-label">Repite la contraseña</label>
            <input className="form-control" type="password"  name="password" placeholder="Ingresa tu contraseña" minLength="6" maxLength="12" {...register("password2", {required: { value: true, message: "La contraseña es requerida" }, minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }})} />
            {errors.password && <span className="errorColor">{errors.password.message}</span>} 
          </div>
          <div className="modal-footer d-block">
            <button type="submit" className="btn btn-success float-end" >
              Registrarme
            </button>
            <button type="button" className="btn btn-dark float-end" onClick={() => {document.location.href = '/home'}}>
              Volver a Home
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
