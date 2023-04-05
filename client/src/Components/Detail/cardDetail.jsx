import React from 'react';
import '../css/cardDetails.css';
import bandera from "../../imgs/BanderaEspañola.jpg";


const CardReseñas = ({nombre, calificacion, imagen, tags, descripcion, precio, nacionalidad}) => {
  console.log(tags);
  return (
    <div className='cardDetail'>
    <div className='zonaIzquierda'>
      <div className='header-detail'>
        <div className='title-detail'>{nombre}</div>
        <p className='score-detail'><strong>{calificacion}/10</strong> Calificación de Usuarios.</p>
      </div>

        <img src={imagen} alt="Imagen no encontrada." className='foto'/>
        

    </div>

    <div className='zonaDerecha'>

   <div className='detail-tags-zone'>   
    {tags?.map((e) => {
      return (
      <li className='detail-tags' key={e.tagId}>    
        {e.description}
      </li>
      )
    })}    
  </div>

   <div className='espacio'></div>
   <div className='des'><h1 className='title-desc'>Descripcion del plato</h1>{descripcion}</div>
   <div className='precioBandera'> <img src={bandera} alt="Imagen no encontrada." className='bandera'/></div>
   <div className='espacio'></div>
   <div className='abajo'><button className="bt-com">¡Añadir al Carro!</button>  <p className='detail-price'>Precio ${precio}</p></div>

    </div>
           
    </div>
  )
}

export default CardReseñas;