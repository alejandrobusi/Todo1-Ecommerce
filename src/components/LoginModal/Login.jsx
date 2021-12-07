import React from 'react'
import '../LoginModal/login.css'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form"

function Login(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  
  const onSubmit = data => {
   fetch(`http://localhost:8000/login`,{
     method: 'POST',
     body: JSON.stringify({
       email: data.email,
       password: data.password
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   })
      .then(res => {
        // setStatusRes(res.status)
        console.log(res.status)
        return res.json()
      })
     .then(json => {
       if(json.token) {
         if (json.frontUser.admin) {
          props.setIsAdmin(true)
         }else {
          props.setIsAdmin(false)
         }
        localStorage.setItem('token', JSON.stringify(json.token))
        localStorage.setItem('user', JSON.stringify(json.frontUser))
        props.setToken(JSON.parse(localStorage.getItem('token')))
            Swal.fire({
              icon: 'success',
              title: `Hola ${json.frontUser.name}`,
              confirmButtonColor : "#0B5ED7",
            })
          }else {
            Swal.fire({
              icon: 'error',
              title: `Nombre o usuario incorrecto`,
              confirmButtonColor : "#0B5ED7",
            }) 
          }
     }) 
     
   }
  
  return (
    <div>
        <button
          type="button"
          className="btn btn-dark d-block "
          data-bs-toggle="modal"
          data-bs-target="#modalForm"
        >
          ingresar
        </button>

        <div
          className="modal fade"
          id="modalForm"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold fs-1" id="exampleModalLabel">
                  Iniciar sesión
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" name="email" placeholder="Ingresa tu email" minLength="7" maxLength="50" {...register("email", {required: { value: true, message: "El campo es requerido"}, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "El formato no es correcto" },  minLength: { value: 7, message: "Demasiado corto" }})} />
                    {errors.email && <span className="errorColor">{errors.email.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"  name="password" placeholder="Ingresa tu contraseña" minLength="6" maxLength="12" {...register("password", {required: { value: true, message: "La contraseña es requerida" }, minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }})} />
                    {errors.password && <span className="errorColor">{errors.password.message}</span>} 
                  </div>
                  <div className="modal-footer d-block">
                    <p className="float-start">
                      Todavia no eststas registrado? <a href="/register">Registrarme</a>
                    </p>
                    <button type="submit" className="btn btn-dark float-end" data-bs-dismiss="modal">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
