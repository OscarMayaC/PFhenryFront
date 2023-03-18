import React from 'react';
import './Styles/Delivery.modules.css'
import Cards from '../Components/Cards';
import CardsOfertaDia from '../Components/CardsOfertasDia';
import lupa from './Misc/lupa.png'
import filtrar from './Misc/filtrar.png'
import flechaIzquierda from './Misc/flecha-izquierda.png'
import flechaDerecha from './Misc/flecha-derecha.png'



function mostrarDiv() {
    var div = document.getElementsByClassName("filtros-con-clase-flotante-depende-voton-si-display");


    if (div[0].style.display === "none") {
        div[0].style.display = "grid";
      } else {
        div[0].style.display = "none";
      }
    }


    const sliderLeft=()=>{
        var slider = document.getElementsByClassName("zona-ofertas-del-dia")
        slider[0].scrollLeft= -100
        }


    const sliderRight=()=>{
        var slider = document.getElementsByClassName("zona-ofertas-del-dia")
        slider[0].scrollLeft= +550

        }

function Delivery() {
    return (
        <div className='delivery'>
            <div className='contenedor-delivery-main'>
            <h1 className='delivery-title'>Delivery!</h1>
            <h1 className='ofertas-title'>Ofertas del día</h1>
            </div>

            
            <div className='zona-seleccion-ofertas-del-dia-delivery'>
            
            <button onClick={sliderLeft} className='boton-flecha-izquierda-scroll-bar-delivery'><img src={flechaIzquierda} className="flecha-izquierda-scroll" alt='flecha-izquierda-scroll'></img></button>
            <div className='zona-ofertas-del-dia'>
    
                    <CardsOfertaDia />
                    <CardsOfertaDia />
                    <CardsOfertaDia />
                    <CardsOfertaDia />
                    <CardsOfertaDia />
                    <CardsOfertaDia />
               
            </div>
            <button onClick={sliderRight} className='boton-flecha-derecha-scroll-bar-delivery'><img src={flechaDerecha} className="flecha-derecha-scroll" alt='flecha-derecha-scroll'></img></button>

            </div> 

<div className='zona-opciones-busqueda-seleccion-delivery'>
<div className='searchbar-zona-delivery'>
<img src={lupa} alt='lupa' className='lupa-searchbar-delivery'></img>
    <input type="search" placeholder='¿Qué te tienta hoy?' className='searchbar-delivery-input'></input>
</div>

            <div className='filtros-ordenamientos-zona'>
            
                    <div className='burguer-filtros-delivery'>
                    <button onClick={mostrarDiv} className="filter-buton-noseque">
                        <img src={filtrar} alt='filtrar' className='filtrar-icon-filtros-delivery'></img>
                        <h1 className='texto-filtros-delivery'>Filtros</h1>
                        </button>
                    </div>
             


                    <div className='zona-botones-filtros-seleccion'>
                        <button className='boton-seleccion-delivery'>Desayuno</button>
                        <button className='boton-seleccion-delivery'>Almuerzo</button>
                        <button className='boton-seleccion-delivery'>Merienda</button>
                        <button className='boton-seleccion-delivery'>Cena</button>
                        <button className='boton-seleccion-delivery'>Postres</button>
                    </div>
            </div>

           
            </div>

            <div className='filtros-con-clase-flotante-depende-voton-si-display'>
                              
                                <div className='zona-textos-filtros-flotantes'>
                                    <h1 className='texto-filtros-flotantes-titulo'>Origen del plato:</h1>
                                    <h1 className='texto-filtros-flotantes-titulo'>Tipo de plato:</h1>
                                    <h1 className='texto-filtros-flotantes-titulo'>Ordenar por:</h1>
                                </div>
              <div className='zona-filtros-flotantes-izq-der-mid'>
                <div className='zona-filtros-flotantes'>
                  
                    <br></br>
                    <button className="boton-filtro-flotante">Argentina</button>
                    <button className="boton-filtro-flotante">España</button>
                    <button className="boton-filtro-flotante">Mexico</button>
                </div>

                <div className='zona-filtros-flotantes'>
             
                    <br></br>
                    <button className="boton-filtro-flotante">Vegano</button>
                    <button className="boton-filtro-flotante">Ovo lacto vegetariano</button>
                    <button className="boton-filtro-flotante">Vegetariano</button>
                    <button className="boton-filtro-flotante">Apto celiacos</button>
                    <button className="boton-filtro-flotante">Ovo vegetariano</button>
                    
                </div>

                <div className='zona-filtros-flotantes'>
  
                    <br></br>
                    <button className="boton-filtro-flotante">Alfabetico descendente</button>
                    <button className="boton-filtro-flotante">Alfabetico ascendente</button>
                    <button className="boton-filtro-flotante">Mayor valoracion</button>
                    <button className="boton-filtro-flotante">Menor valoracion</button>
                    <button className="boton-filtro-flotante">Mayor precio</button>
                    <button className="boton-filtro-flotante">Menor precio</button>
                </div>
                </div>
            </div>


            <div className='zona-cartas-platos-seleccionados'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            </div>

            <footer className='footer-delivery'>
                <h1 className='texto-footer-delivery'>© 2023 Henry 34a grupo 14.</h1>
            </footer>
        </div>
    );
}



export default Delivery;