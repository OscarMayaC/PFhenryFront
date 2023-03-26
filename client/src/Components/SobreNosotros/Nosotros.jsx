import React from 'react';
import logo from '../../imgs/logo.png';
import user from '../../imgs/user.png'
import '../css/NavBar.modules.css';
import '../css/nosotros.css';
import { Link } from "react-router-dom";


const Nosotros = () => {
     


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

            <div className='base'>

             <div className='info'>

             <div className='detail'>

            <h1 className='rosa'>Rosa del Viento</h1>
            <img src={logo} alt="Imagen no encontrada." className='logosss'/>
            <p>Nosotros no cocinamos para gente exclusiva, nosotros cocinamos para tí.</p><br/>
            <p>No nos importa tu color de piel, ni raza, ni religion, ni preferencias sexuales.</p><br/>
            <p>A nosotros solo nos importa tu hambre, tu satisfacción y tu antojo.</p><br/>
            <p>Fundada en 1977, se creó el primer menu con pasion y muchos sueños.</p><br/>
            <p>Con lealtad y la honestidad. Vamos a crecer y creceremos con sabor. </p><br/>
            <p> Desde nuestras tres gastronomias extenderemos algo mas que un negocio.</p><br/>
            <p>Extenderemos un progreso multicultural pero sobre todo un servicio eficaz.</p>

            </div>

            </div>


            </div>

        </div>

    )
}

export default Nosotros;