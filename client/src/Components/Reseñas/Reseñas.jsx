import React from 'react';
import logo from '../../imgs/logo.png';
import '../css/reseñas.css';
import testimonios from './testimonios';
import CardReseñas from './CardReseñas';
import NavBar from '../NavBar';




const Reseñas = () => {
     
    let reseñas = testimonios();

    return (
        <div className=''>
           <div><NavBar/></div>

            <div className='contenedor'>

                <div className='textoIntroduccion'>
                    <h1 className='texto'>Reseñas</h1><br/>
                </div>

                <div className='testimonios'>

                { 
                   reseñas?.map((el) =>{
                    return(
                    <div>
                    <CardReseñas
                       name={el.name} 
                       titulo={el.titulo}
                       opinion={el.opinion}
                       imagen={logo}
                        />
                    </div>
                    )
                })
            } 

                </div>

            </div>


        </div>

    )
}

export default Reseñas;