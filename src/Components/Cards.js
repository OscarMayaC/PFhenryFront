import React from 'react';
import '../Pages/Styles/Cards.modules.css'
// import { Link } from "react-router-dom";


export default function Cards(props) {


    return (
        <div className='cards'>
            <div className='zona-imagenes-carta'>
                <img src='' alt='imagen de plato'></img>
            </div>
            <div className='zona-info-plato-texto'>
                <h1 className='titulo-plato-carta'>Asado</h1>
                <h1 className='descripcion-plato-carta'>Moyeja, vacio, tirita + papas fritas</h1>
            </div>

        </div>
        );
    };
    
    