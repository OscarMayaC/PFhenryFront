import React from 'react';
import '../Pages/Styles/Compras.modules.css'
import motoDeliveryPerfil from '../Pages/Misc/delivery-moto-perfil.png'
import { useSelector } from 'react-redux';
// import Cards from '../Components/Cartas/Cards';
// import cartaCarrito from '../Components/Cartas/cartaCarrito';
import flechaIzquierda from '../Pages/Misc/flecha-izquierda.png'
import flechaDerecha from '../Pages/Misc/flecha-derecha.png'
import CartaCarrito from '../Components/Cartas/CartaCarrito';
function Compras(props) {
    const carrito = useSelector((state) => state.Carrito)

    // SUMA PRECIOS CARRITO NO FINAL 
    const sumaPrecios = carrito.reduce((total, producto) => {
        return total + producto.price;
      }, 0);

// GENERADOR ALEATORIO DE COSTO ENVIO 
      function generarNumeroAleatorio() {
        return Math.floor((300 - 100 + 1) * Math.random() + 100);
      }
      
      const numeroAleatorio = generarNumeroAleatorio();
                         


    //   GENERADOR ALEATORIO DE TIEMPO DE LLEGADA PEDIDO 

    function generarNumeroAleatorioEnvio() {
        return Math.floor((60 - 15 + 1) * Math.random() + 15);
      }
      
      const numeroAleatorioEnvio = generarNumeroAleatorioEnvio();
      // MANEJADOR SLIDER IZQUIERDO, CON SELECCION GENERAL 

                          function handleSliderLeft(event) {

                            var slider = document.getElementsByClassName("izquierda-carrito-renderizado-miniatura-productos-seleccionados")
                            slider[0].scrollLeft= -100
                            
  
                                                      }

    
                  

            // MANEJADOR SLIDER DERECHO, CON SELECCION GENERAL 
                  
                      function handleSliderRight(event) {
                        var slider = document.getElementsByClassName("izquierda-carrito-renderizado-miniatura-productos-seleccionados")
                        slider[0].scrollLeft= +770
                                                        }






    return (
        <div className='compras-carrito-main'>
            <div className='zona-izquierda-carrito'>
                    <div className='titular-productos-seleccionados'>
                    <h1 className='titulo-productos-compras'>PRODUCTOS SELECCIONADOS</h1>
                    </div>
                <div className='izquierda-carrito-detalles-precio-usuario'>
                                <div className='detalle-usuario-compras'>
                                    <h1>Usuario: User</h1>
                                </div>
                                <div className='detalle-precio-descuento-final'>
                                    <h1>Precio: ${sumaPrecios}</h1>
                                    <h1>Descuento: 0%</h1>
                                    <h1>Precio final: ${sumaPrecios + numeroAleatorio}</h1>
                                </div>
                </div>


                <div className='izquierda-carrito-renderizado-miniatura-productos'>
                 
            <button onClick={handleSliderLeft} className='boton-flecha-izquierda-scroll-bar-carrito'>
              <img src={flechaIzquierda} className="flecha-izquierda-scroll-carrito" alt='flecha-izquierda-scroll-carrito'></img>
            </button>
      
      
                      <div className='izquierda-carrito-renderizado-miniatura-productos-seleccionados'>

                                                                    {carrito?.map((e) => {
                                                return (
                                                <div key={e.id}>                                               
                                                    <CartaCarrito
                                                        key={e.id}
                                                        id={e.id}
                                                        name={e.name}                                                
                                                        image={e.image}
                                                        price={e.price}
                                                        quantity={e.quantity}                                                
                                                    />                                          
                                                </div>
                                                );
                                                })}
                      </div>
                      
            <button onClick={handleSliderRight} className='boton-flecha-derecha-scroll-bar-carrito'>
                <img src={flechaDerecha} className="flecha-derecha-scroll-carrito" alt='flecha-derecha-scroll-carrito'></img>
            </button>

</div>   
 
                <div className='izquierda-carrito-final-detalles-compra'>
                    <div className='costo-de-envio-compra'></div>
                    <div className='costo-de-envio-compra-resultado-precio-total'></div>
                </div>
            </div>
            <div className='zona-derecha-carrito'>
                
                <div className='derecha-carrito-tiempo-aprox'>
                            <div className='carrito-primer-texto-delivery-derecha'>
                                <img src={motoDeliveryPerfil} alt="moto-andando" className='moto-perfil-carrito'></img>
                                <h1 className='tiempo-texto-carrito-derecha'>TIEMPO APROX</h1>
                            </div>

                            <div className='div-llega-en-mas-tiempo-y-costo-envio'>
                                    <div className='llega-en-texto-mas-tiempo-aprox'>
                                        <h1 className='texto-llega-en'>Te llega en</h1>
                                        <h1 className='minutos-llega-aprox'>{numeroAleatorioEnvio}-{numeroAleatorioEnvio + 30} min</h1>
                                    </div>

                                    <div className='div-envio-mas-precio'>
                                        <h1 className='envio-texto'>Envio</h1>
                                        <h1 className='precio-envio'>${numeroAleatorio}</h1>
                                    </div>
                            </div>
                </div>
                <div className='derecha-carrito-titulo-medio-pago'>MEDIO DE PAGO</div>
                
                <div className='derecha-carrito-seleccion-pago'>
                       
                       
                        <div className='checkbox-efectivo-carrito-derecha'>
                            <input type="checkbox"  className="checkbox-efectivo-carrito-check" />
                            <h1 className='efectivo-texto-carrito-derecha'>Efectivo</h1>
                        </div>
                    
                        <div className='monto-cantidad-efectivo-carrito-derecha'>
                            <h1 className='simbolo-efectivo-carrito-derecha'>$</h1>
                            <input type="text" className='cantidad-de-dinero-input'/>
                        </div>

                        <div className='checkbox-tarjeta-carrito-derecha'>
                            <input type="checkbox" className='checkbox-tarjeta-carrito-check' />
                            <h1 className='tarje-texto-carrito-derecha'>Debito o credito</h1>
                        </div>


                </div>
               
                <div className='derecha-carrito-boton-pago'><button className='boton-pago-carrito'>Pagar</button></div>
            </div>
        </div>
    );
}

export default Compras;