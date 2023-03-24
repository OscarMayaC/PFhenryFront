import React from 'react';
import '../../Pages/Styles/CartaCarritoCompra.modules.css'

    export default function CartaCarritoCompra({name, image, price}) {
    return (
        <div>
         
        <div className='cards-carrito-previsualizacion'>
            
            <div className='imagenes-carrito-previsualizacion'>
                <img src={image} alt='imagen de plato'></img>
            </div>
            <div className='zona-info-plato-carrito-previsualizacion'>
                <div className='info-importante-carrito-previsualizacion'>
                     <h1 className='titulo-plato-carrito-previsualizacion' >{name}</h1>

      
                     <p className='precio-plato-carrito-previsualizacion'>{price}</p>
                </div>
                <div className='botones-agregar-o-quitar-mas-del-mismo-al-carro'>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion">+</button>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion">-</button>
                </div>
            </div>

        </div>
        
        </div>
    );
}

