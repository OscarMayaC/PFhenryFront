import React from 'react';
import '../../Pages/Styles/CartaCarritoCompra.modules.css'
import { agregarAlCarrito, restarAlCarrito } from '../../redux/actions';
import { useDispatch } from 'react-redux';



export default function CartaCarritoCompra({id, name, image, price, quantity}) {
    const dispatch = useDispatch();

    const removeFromCartLocalStorage = (id) => {
      const cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
      const existingItemIndex = cartItems.findIndex(item => item.id === id);
      if (existingItemIndex >= 0) {
        if (cartItems[existingItemIndex].quantity === 1) {
          cartItems.splice(existingItemIndex, 1); 
        } else {
          cartItems[existingItemIndex].quantity -= 1; 
        }
        localStorage.setItem('carrito', JSON.stringify(cartItems));
       
      }

    };
    
                 const restaEnCart=()=>{
                    removeFromCartLocalStorage(id)
                   dispatch(restarAlCarrito({id}))
              
            }



const addToCartLocalStorage = (id, name, price) => {
    const cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === id);
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(cartItems));
  };


             const sumarAcarrito=()=>{
                addToCartLocalStorage(id, name, price);
               dispatch(agregarAlCarrito({id, name, price, quantity: 1 }))
          }




    return (
        <div>
         
        <div className='cards-carrito-previsualizacion'>
            
            <div className='imagenes-carrito-previsualizacion'>
                <img src={image} alt='imagen de plato' className='img-carta-carrito-compra'></img>
            </div>
            <div className='zona-info-plato-carrito-previsualizacion'>
                <div className='info-importante-carrito-previsualizacion'>
                     <h1 className='titulo-plato-carrito-previsualizacion'>{name}</h1>
                     <p className='cantidad-plato-carrito-previsualizacion'>x{quantity}</p>
                     <p className='precio-plato-carrito-previsualizacion'>€{price}</p>
                </div>
                <div className='botones-agregar-o-quitar-mas-del-mismo-al-carro'>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion-izquierda" onClick={restaEnCart}>-</button>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion-derecha" onClick={sumarAcarrito}>+</button>
                </div>
            </div>

        </div>
        
        </div>
    );
}

