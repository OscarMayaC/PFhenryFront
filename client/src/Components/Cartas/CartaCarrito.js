import React from 'react';
// import plato from '../../Pages/Misc/plato-comida.jpg'
import '../../Pages/Styles/CartaCarrito.modules.css'

function CartaCarrito({id, name, image, price, quantity}) {
    // if(image==="")return image={plato};
    return (
        <div className='carta-carrito-en-compras'>
             <div className='zona-imagenes-carta-en-carrito-compras'>
                <img src={image} alt='imagen de plato-en-carrito-compras'></img>
            </div>
            <div className='zona-info-plato-texto-en-carrito-compras'>
            <h1 className='titulo-plato-carta-en-carrito-compras' >{name}</h1>
                <p className='quantity-plato-en-carrito-compras'>{quantity}</p>
                <p className='precio-plato-en-carrito-compras'>${price}</p>
    
                <button  className="boton-quitar-en-carrito-compras">X</button>
            </div>

        </div>
    );
}

export default CartaCarrito;