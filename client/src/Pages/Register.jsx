import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import '../SASS/register.modules.css'


const Register = () => {

    const [input, setInput] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        contraseña: "",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="register-bg">
            <NavBar />

            <form className='main-form-register'>
                <label>Nombre: </label>
                <input 
                    type="text"
                    value={input.nombre}
                    name='nombre'
                    placeholder='Escriba su nombre...'
                    onChange={handleChange}
                />

                <label>Apellidos: </label>
                <input 
                    type="text"
                    value={input.apellidos}
                    name="apellidos"
                    placeholder='Escriba su contraseña...'
                    onChange={handleChange}
                />

                <label>Correo: </label>
                <input 
                    type="mail"
                    value={input.correo}
                    name="correo"
                    placeholder='Escriba su correo...'
                    onChange={handleChange}
                />

                <label>Contraseña: </label>
                <input 
                    type="password"
                    value={input.contraseña}
                    name="contraseña"
                    placeholder='Escriba su contraseña...'
                    onChange={handleChange}
                />

                <button className='register-btn' onSubmit="">Registrarse!</button>
            </form>
        </div>
    )
}

export default Register;