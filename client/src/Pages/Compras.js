import React from 'react';
import '../Pages/Styles/Compras.modules.css'
import motoDeliveryPerfil from '../Pages/Misc/delivery-moto-perfil.png'
function Compras(props) {
    return (
        <div className='compras-carrito-main'>
            <div className='zona-izquierda-carrito'>
                    <div className='titular-productos-seleccionados'>
                    <h1 className='titulo-productos-compras'>PRODUCTOS SELECCIONADOS</h1>
                    </div>
                <div className='izquierda-carrito-detalles-precio-usuario'>
                                <div className='detalle-usuario-compras'>
                                    <h1>Usuario</h1>
                                </div>
                                <div className='detalle-precio-descuento-final'>
                                    <h1>Precio:</h1>
                                    <h1>Descuento:</h1>
                                    <h1>Precio final:</h1>
                                </div>
                </div>
                <div className='izquierda-carrito-renderizado-miniatura-productos'>
                    <h1>AQUI IMG CARTA MINI</h1>
                    <h1>AQUI IMG CARTA MINI</h1>
                    <h1>AQUI IMG CARTA MINI</h1>
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
                                        <h1 className='minutos-llega-aprox'>15-30 min</h1>
                                    </div>

                                    <div className='div-envio-mas-precio'>
                                        <h1 className='envio-texto'>Envio</h1>
                                        <h1 className='precio-envio'>$159</h1>
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