import React from 'react';
import '../Pages/Styles/CardsOfertasDia.modules copy.css'
// import { Link } from "react-router-dom";


export default function CardsOfertaDia(props) {


    return (
        <div className='cards-oferta-dia'>
            <div className='zona-imagenes-carta-oferta-dia'>
                <img src='' alt='imagen de plato-oferta-dia'></img>
            </div>
            <div className='zona-info-plato-texto-oferta-dia'>
                <h1 className='titulo-plato-carta-oferta-dia'>Asado</h1>
                <h1 className='descripcion-plato-carta-oferta-dia'>Moyeja, vacio, tirita + papas fritas</h1>
            </div>

        </div>
        );
    };
    
    