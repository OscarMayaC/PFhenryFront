import React from 'react';
import '../../Pages/Styles/Cards.modules.css'
import { Link } from "react-router-dom";
import { agregarAlCarrito } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function Cards({id, name, description, image, price, nationality}) {
  const dispatch = useDispatch();

// FUNCTION GUARDADORA DE PRODUCTOS 

const addToCartLocalStorage = (id, name, price) => {
    const cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === id);
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(cartItems));
    // agregarAlCarrito(cartItems)
    // console.log(cartItems)
  };


             const sumarAcarrito=()=>{
                addToCartLocalStorage(id, name, price);
               dispatch(agregarAlCarrito({id, name, price, quantity: 1 }))
          }


    return (
        <div className='cards'>
            
            <div className='zona-imagenes-carta-mas-boton'>
              <div className='imagenes-carta'>
                <img src={image} alt='imagen de plato' className='img-carta'></img>
                </div>
                <div className='circulo-div-agregar-carrito'>
                <button onClick={sumarAcarrito} className="boton-agregar-carrito-en-card">+</button>
                </div>

            </div>
            <div className='zona-info-plato-texto'>
            <h1 className='titulo-plato-carta' >{name}</h1>
                <p className='descripcion-plato-carta'>{description}</p>
                <p className='precio-plato'>€{price}</p>
                <p className='nacionalidad-plato'>{nationality}</p>
                <Link to={"/detalles/" +id} className="link-a-detalles-por-id">
                    <div className='leer-mas-div'>
                    <h1 className='leer-mas-txt'>Leer más</h1>
                    </div>
                    </Link>
            </div>

        </div>
        );
    };
    
    