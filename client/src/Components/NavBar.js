import React from 'react';
import logo from '../Pages/Misc/logo.png'
import user from '../Pages/Misc/user.png'
import '../Pages/Styles/NavBar.modules.css'
import { Link } from "react-router-dom";
import carroCompras from '../Pages/Misc/carro-de-compras.png'
// import { useSelector } from 'react-redux';
// import CartaCarritoCompra from './Cartas/CartaCarritoCompra';
export default function NavBar() {
  
  


 
    function handleClick(event) {

        const buttonId = event.target.id;
        mostrarPreCarrito(buttonId)
                              }

      function mostrarPreCarrito(id) {

            var div = document.getElementsByClassName("desplegable-carrito");
            var idDesplegable = 0;
  
                if (div[idDesplegable].style.display === "grid") {
                    div[idDesplegable].style.display = "none";
                  } else {
                    div[idDesplegable].style.display = "grid";

                  }
                              }


    return (
        <div className='navbar-main-contenedor'>

            <div className='navbar-left-zone'>
                <Link to="/">
                <div className='navbar-circulo-logo-fondo'>
                    <div className='circulo-navbar'>
                    <img src={logo} className="navbar-logo-left" alt="logo"/>
                </div>
                
                </div>
                </Link>

                <h1 className='logo-texto-navbar-left'>Rosa del Viento</h1>
            </div>

            <div className='navbar-right-zone'>
          

                    <button className='navbar-button-carrito' onClick={handleClick}><h1 className='numero-cantidad-compras-carrito'></h1>
                    <img src={carroCompras} alt="carrito-compras" className='icon-carro-compras-nav'></img>
                    </button> 

         


            <Link to={"/sobrenosotros"}> 
                    <button className='navbar-button-sobre-nosotros'>Sobre nosotros!</button>
            </Link>


            <Link to={"/iniciarsesion"}>
                    <button className='navbar-button-iniciar-sesion'>
                   
                    <div className='contenedor-button-navbar-inciarsesion'>
       
                    <img src={user} alt="img-user" className="navbar-iniciar-user-icon"  width="40px" height="40px"></img>
                    <h1 className='txt-navbar-iniciarsesion'>Iniciar sesión!</h1> 
       
                    </div>
                   
                    </button>
            </Link>


            </div>



        </div>

        
    );
};

