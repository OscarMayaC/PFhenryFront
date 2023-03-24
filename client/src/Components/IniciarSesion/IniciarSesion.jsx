import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
// import { loginUser } from '../../redux/actions';
import "../SASS/IniciarSesion.modules.css"
import '../SASS/register.modules.css'



const IniciarSesion = () => {

    // const dispatch = useDispatch();
    // const history = useHistory();


    const [input, setInput] = useState({
        correo: "",
        contraseña: "",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("que ise el tio")        
    }

    return (
        <div className='login-bg'>
            <NavBar />
            <div className='main-container'>
                <form className='body-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-divs'>
                        <label>Correo: </label>
                            <input className='body-input'
                                type="email"
                                value={input.correo}
                                name= "correo"
                                placeholder='Ingrese su correo...'
                                onChange={handleChange}
                            />                  
                   
                        <label>Contraseña: </label>
                            <input className='body-input'
                                type="password"
                                value={input.contraseña}
                                name= "contraseña"
                                placeholder='Ingrese su contraseña...'
                                onChange={handleChange}
                            />
                    </div>
                    <br />
                    <button className='login-btn' type='submit'>Iniciar Sesion</button>
                    <br />
                    <p>
                        <b> ¿Aún no tienes cuenta? <Link to="/register">Registrate</Link> aquí. </b>
                    </p>
                </form>
            </div>          
        </div>
    )
}

export default IniciarSesion;