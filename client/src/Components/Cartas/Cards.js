import React from 'react';
import '../../Pages/Styles/Cards.modules.css'
// import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { carritoAgrego } from '../../redux/actions';

export default function Cards({id, name, description, image, price, nationality}) {
        
        const Carrito = useSelector((state) => state.Carrito)

       const [count, useCount] = useState(0)
        
        // const saveLocal=()=>{
        // localStorage.setItem("carrito",JSON.stringify());
        // };


    const sumarAcarrito=()=>{
        const quantity=1

        // carritoAgrego({id, name ,description, image,price, nationality})
        Carrito.push({id, name ,description, image,price, nationality, quantity});
 
        const numCompras = document.getElementsByClassName("numero-cantidad-compras-carrito")
        const cantCompras = numCompras[0].innerHTML= count
        console.log(cantCompras)
        console.log(Carrito)

    }


    return (
        <div className='cards'>
            
            <div className='zona-imagenes-carta'>
                <img src={image} alt='imagen de plato'></img>
            </div>
            <div className='zona-info-plato-texto'>
            <h1 className='titulo-plato-carta' >{name}</h1>
                <p className='id-plato'>{id}</p>
              
                <p className='descripcion-plato-carta'>{description}</p>
                <p className='precio-plato'>{price}</p>
                <p className='nacionalidad-plato'>{nationality}</p>
                <button onClick={sumarAcarrito} className="boton-agregar-carrito-en-card">Agregar a carrito</button>
            </div>

        </div>
        );
    };
    
    