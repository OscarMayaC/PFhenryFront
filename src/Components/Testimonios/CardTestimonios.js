import React from 'react';
import '../css/cardTestimonios.css';


const CardTestimonios = ({name, titulo, opinion, imagen}) => {

  return (
    <div className='card'>
            <h2 className='titulo' ><span>{titulo}</span></h2>
            <h5 className='opinion'>"{opinion}"</h5>
            <h5 className='titulo'>{name}</h5>
            <img src={imagen} alt="Imagen no encontrada." className='imagen'/>
         

    </div>
  )
}

export default CardTestimonios;