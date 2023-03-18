import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import "../SASS/IniciarSesion.modules.css"
import { GoogleLogin } from '@react-oauth/google';
import '../SASS/register.modules.css'




const IniciarSesion = () => {

    

    const responseMessage = (response) => {
        console.log(response)
    };

    const errorMessage = (error) =>  {
        console.log(error)
    }

    

    return (
        <div className='login-bg'>
            <div>
                <NavBar />
            </div> 


            <div className='main-container'>
                <p>¿Cúal es tú número de teléfono o correo electrónico?</p>

                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

                <form className=''>
                    <input type="text" name="mail_tlf" placeholder="Ingrese su número o correo"></input>
                    <button>Continuar</button>
                </form>
                
                <Link to="/register"><button className='register-btn'>Registarse</button></Link>
                
            </div>
        </div>  
    )
}

export default IniciarSesion;