import React from 'react';
import logo from '../../imgs/logo.png';
import user from '../../imgs/user.png'
import '../css/NavBar.modules.css';
import '../css/testimonios.css';
import { Link } from "react-router-dom";
import testimonios from './testimonios';
import CardTestimonios from './CardTestimonios';

const Testimonios = () => {
     
    let reseñas = testimonios();

    console.log(reseñas);

    return (
        <div className=''>
            <div className='navbar-main-contenedor'>

                <div className='navbar-left-zone'>
                    <Link to="/">
                        <div className='navbar-circulo-logo-fondo'>
                            <div className='circulo-navbar'>
                                <img src={logo} className="navbar-logo-left" alt="logo" />
                            </div>

                        </div>
                    </Link>

                    <h1 className='logo-texto-navbar-left'>Rosa del Viento</h1>
                </div>

                <div className='navbar-right-zone'>

                    <Link to={"/sobrenosotros"}> <button className='navbar-button-sobre-nosotros'>Sobre nosotros</button> </Link>
                    <Link to={"/reseñas"}> <button className='navbar-button-reseñas'>Reseñas</button> </Link>
                    <Link to={"/iniciarsesion"}> <button className='navbar-button-iniciar-sesion'>
                        <div className='contenedor-button-navbar-inciarsesion'>

                            <img src={user} alt="img-user" className="navbar-iniciar-user-icon" width="40px" height="40px"></img>
                            <h1 className='txt-navbar-iniciarsesion'>¡Iniciar sesión!</h1>

                        </div>
                    </button>
                    </Link>
                </div>

            </div>

            <div className='contenedor'>

                <div className='textoIntroduccion'>
                    <h1 className='texto'>Reseñas</h1><br/>
                </div>

                <div className='testimonios'>

                { 
                   reseñas?.map((el) =>{
                    return(
                    <div>
                    <CardTestimonios
                       name={el.name} 
                       titulo={el.titulo}
                       opinion={el.opinion}
                       imagen={logo}
                        />
                    </div>
                    )
                })
            } 

                </div>

            </div>


        </div>

    )
}

export default Testimonios;