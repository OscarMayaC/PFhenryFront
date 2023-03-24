import React from 'react';
import './Styles/Landing.modules.css';
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom';
import mainImg from '../Pages/Misc/main.png'
import twitter from '../Pages/Misc/twitterRedondo.png'
import instagram from '../Pages/Misc/instagramRedondo.png'
import facebook from '../Pages/Misc/facebookRedondo.png'

function Landing() {
  return (
    <>
      <NavBar />
        <div className="Landing">
      
        <div className='main-landing-dos-lados'>

          <div className='landing-contenedor-izquierda'>
        
            <h1 className='titular-landing-izquierda'>Pedi tu comida aqui!</h1>
          
            <div className='botonera-secciones-landing-izquierda'>
              <Link to="/delivery">
                <button className='button-delivery-seccion-landing'>Delivery!</button>
                </Link>
                <Link to="/reservar">
                <button className='button-reserva-mesa-seccion-landing'>Reservar!</button>
                </Link>
            </div>

            <div className='texto-iniciar-sesion-landing'>
                <Link to="/iniciarsesion" className='link-iniciarsesion-landing-izquierda'>Iniciar sesión</Link><h1 className='texto-iniciarsesion-landing-izquierda'>para ver tus direcciones recientes</h1>
            </div>

            <div className='zona-redes-iconos-landing'>
              <img src={facebook} alt='facebook-ico' className='facebook-ico'></img>
              <img src={twitter} alt='twitter-ico' className='twitter-ico'></img>
              <img src={instagram} alt='instragram-ico' className='instragram-ico'></img>
            </div>

          <h1 className='text-landing-derecho-reservado'>© 2023 Henry 34a grupo 14.</h1>

          </div>

              <div className='landing-contenedor-derecha'>
              
                <img className='img-landing-derecha-comida-dos' src={mainImg} alt='img-de-pastas '></img>

              </div>

        </div>
        </div>
    </>
  );
}

export default Landing;
