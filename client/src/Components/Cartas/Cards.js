import React from 'react';
import '../../Pages/Styles/Cards.modules.css'
// import { Link } from "react-router-dom";


export default function Cards({id, name, description, image, price, nationality}) {


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
            </div>

        </div>
        );
    };
    
    