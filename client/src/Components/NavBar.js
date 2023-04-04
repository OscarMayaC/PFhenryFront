import React, { useEffect } from 'react';
import logo from '../Pages/Misc/logo.png'
import user from '../Pages/Misc/user.png'
import '../Pages/Styles/NavBar.modules.css'
import { Link } from "react-router-dom";
import carroCompras from '../Pages/Misc/anadir-a-la-cesta.png'
import { useSelector, useDispatch } from 'react-redux';
import CartaCarritoCompra from './Cartas/CartaCarritoCompra';
// import { actualizarTotalQuantity, agregarAlCarrito} from '../redux/actions';
import { actualizarTotalQuantity} from '../redux/actions';
// import { crearOrden } from '../redux/actions';
import { useState } from 'react';


export default function NavBar() {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.totalQuantityCart);
    const carrito = useSelector(state => state.Carrito);
    const isLoggedIn = useSelector(state=> state.isLoggedIn)
    const [Items, setItems] = useState([]);


    // ITEMS TIENE TODO LO QUE LOCALSTORAGE
    useEffect(() => {
      
        if (carrito.length <= 0) {
 
            let btn = document.getElementsByClassName("boton-carrito-ir-nav");;
            if (btn) {
              btn[0].style.display = 'none';
            }
          } else {
            const btn = document.getElementsByClassName('boton-carrito-ir-nav');
            if (btn) {
              btn[0].style.display = 'flex';
            }
          }

    const storedItems = JSON.parse(localStorage.getItem('carrito')) || [];
    setItems(storedItems);
    dispatch(actualizarTotalQuantity(carrito));
    // dispatch(agregarAlCarrito(storedItems));
    // console.log(carrito)
    // Agregar listener para actualizar estado cuando se modifique el localStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function para remover listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }

        
      }, [dispatch, carrito]);

      
      function handleStorageChange(event) {
        if (event.key === 'carrito') {
          const storedItems = JSON.parse(event.newValue) || [];
          setItems(storedItems);
        }
      }


    function handleClick(event) {   
        const buttonId = event.target.id;
        console.log(Items)
        if(Items.length>0){
        mostrarPreCarrito(buttonId)
        

    }else{
        window.alert('carrito vacio');
        console.log("carritoVacio")}       
    }

      function mostrarPreCarrito(id) {

            let div = document.getElementsByClassName("desplegable-carrito");
            let btn = document.getElementsByClassName("boton-carrito-ir-nav");
            let cards = document.getElementsByClassName("cards-carrito-previsualizacion");
            let imgCards = document.getElementsByClassName("imagenes-carrito-previsualizacion");
            let imgCardsPart = document.getElementsByClassName("img-carta-carrito-compra");
            let infoCards = document.getElementsByClassName("zona-info-plato-carrito-previsualizacion");
            let infoCarritoPre = document.getElementsByClassName("info-importante-carrito-previsualizacion");
            let tituloCarritoPre = document.getElementsByClassName("titulo-plato-carrito-previsualizacion");
            let precioCarritoPre = document.getElementsByClassName("precio-plato-carrito-previsualizacion");
            let botonesAgregarQuitar = document.getElementsByClassName("botones-agregar-o-quitar-mas-del-mismo-al-carro");
            let botonMas = document.getElementsByClassName("boton-agregar-uno-mas-carrito-previsualizacion-derecha");
            let botonMenos = document.getElementsByClassName("boton-agregar-uno-mas-carrito-previsualizacion-izquierda");

            let idDesplegable = 0;
  
                if (div[idDesplegable].style.display === "flex") {
                    div[idDesplegable].style.display = "none";
                    btn[idDesplegable].style.display = "none";

                    cards[idDesplegable].style.display = "none";
                    imgCards[idDesplegable].style.display = "none"
                    imgCardsPart[idDesplegable].style.display = "none"
                    infoCards[idDesplegable].style.display = "none"
                    infoCarritoPre[idDesplegable].style.display = "none"
                    tituloCarritoPre[idDesplegable].style.display = "none"
                    precioCarritoPre[idDesplegable].style.display = "none"
                    botonesAgregarQuitar[idDesplegable].style.display = "none"
                    botonMenos[idDesplegable].style.display = "none"
                    botonMas[idDesplegable].style.display = "none"
                  } else {
                    div[idDesplegable].style.display = "flex";
                    btn[idDesplegable].style.display = "flex";
                   
                    cards[idDesplegable].style.display = "flex";
                    imgCards[idDesplegable].style.display = "flex"
                    imgCardsPart[idDesplegable].style.display = "flex"
                    infoCards[idDesplegable].style.display = "flex"
                    infoCarritoPre[idDesplegable].style.display = "flex"
                    tituloCarritoPre[idDesplegable].style.display = "flex"
                    precioCarritoPre[idDesplegable].style.display = "flex"
                    botonesAgregarQuitar[idDesplegable].style.display = "flex"
                    botonMenos[idDesplegable].style.display = "flex"
                    botonMas[idDesplegable].style.display = "flex"         
                }
            }

            
            
                              

    return (
        <div className='navbar-full'>
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
          

                    <button className='navbar-button-carrito' onClick={handleClick}><h1 className='numero-cantidad-compras-carrito'>{totalQuantity}</h1>
                    <img src={carroCompras} alt="carrito-compras" className='icon-carro-compras-nav'></img>
                    </button> 

         


            <Link to={"/sobrenosotros"}> 
                    <button className='navbar-button-sobre-nosotros'>Sobre nosotros!</button>
            </Link>

            <Link to={"/reseñas"}> <button className='navbar-button-reseñas'>Reseñas!</button> </Link>


            <Link to={"/iniciarsesion"}>
                    <button className='navbar-button-iniciar-sesion'>
                   
                    <div className='contenedor-button-navbar-inciarsesion'>
       
                    <img src={user} alt="img-user" className="navbar-iniciar-user-icon"  width="40px" height="40px"></img>
                    <h2 className='txt-navbar-iniciarsesion'>Iniciar sesión!</h2> 
       
                    </div>
                   
                    </button>
            </Link>


            </div>



        </div>

        <div className='desplegable-carrito'> 

  {carrito?.map((p)=>{
      return(<>
      <CartaCarritoCompra id={p.id} name={p.name} image={p.image} price={p.price} quantity={p.quantity}/>
      
      </>)
})}

<Link to={"/carrito"} className="link-carrito-compras"> 
    <button className='boton-carrito-ir-nav'>IR A CARRITO</button>
</Link>


</div>
        
        </div>
        

        
    );
};

