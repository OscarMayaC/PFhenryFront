import React from 'react';
import '../../Pages/Styles/CardsOfertasDelDia.modules.css'

import { agregarOfertasDelDia } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function CardOfertaDelDia({id, name, description, image, price, nationality}) {
  const dispatch = useDispatch();


const addToCartLocalStorage = (id, name, description, image, price, nationality) => {
    const cartItems = JSON.parse(localStorage.getItem('ofertasDelDia')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === id);
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({id, name, description, image, price, nationality});
      dispatch(agregarOfertasDelDia(cartItems))
    }
    localStorage.setItem('ofertasDelDia', JSON.stringify(cartItems));
    
  };

  const agregarOferta=()=>{
    addToCartLocalStorage({id, name, description, price, nationality});
    // console.log({id, name, description, price, nationality})
    const getOfertasDelDia= JSON.parse(localStorage.getItem('ofertasDelDia')) || [];
    
console.log(getOfertasDelDia)
}


    return (
        <div className='CardOfertaDelDia'>
            
            <div className='Cards-Ofertas-del-dia-zona-imagenes-carta-mas-boton'>
                <img src={image} alt='imagen de plato' className='Cards-Ofertas-del-dia-img-carta'></img>
            </div>

            <div className='Cards-Ofertas-del-dia-zona-info-plato-texto'>
            <h1 className='Cards-Ofertas-del-dia-titulo-plato-carta' >{name}</h1>
                <p className='Cards-Ofertas-del-dia-descripcion-plato-carta'>{description}</p>
                <div className='Cards-Ofertas-del-dia-precio-nacionalidad'>
                <p className='Cards-Ofertas-del-dia-precio-plato'>€{price}</p>
                <p className='Cards-Ofertas-del-dia-nacionalidad-plato'>{nationality}</p>
                </div>
               
                                <div className='Cards-Ofertas-del-dia-botones-edicion-plato'>
              
                                <button onClick={agregarOferta} className="Cards-Ofertas-del-dia-boton-eliminar-carrito-en-card">+</button>
                       


                                </div>

            </div>

        </div>
        );
    };
    
    