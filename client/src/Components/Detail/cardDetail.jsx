import React from 'react';
import '../css/cardDetails.css';
import bandera from "../../imgs/BanderaEspañola.jpg";


const CardReseñas = ({nombre, calificacion, imagen, tags, descripcion, precio, nacionalidad}) => {

  return (
    <div className='cardDetail'>
    <div className='zonaIzquierda'>
        <h1>{nombre}</h1>
        <img src={imagen} alt="Imagen no encontrada." className='foto'/>
        <p>{calificacion}/10 Calificación de Usuarios.</p>

    </div>

    <div className='zonaDerecha'>

   <div> <button>BotonUser1</button><button>BotonUser2</button><button>BotonUser3</button></div>
   <div className='espacio'></div>
   <a href='as'>{tags}</a>
   <div className='espacio'></div>
   <div className='des'><h1>Descripcion del plato</h1>{descripcion}</div>
   <div className='espacio'></div>
   <div className='precioBandera'><p>Precio ${precio}</p> <img src={bandera} alt="Imagen no encontrada." className='bandera'/></div>
   <div className='abajo'><button className="bt-com">¡Añadir al Carrio!</button>  </div>

    </div>
           
    </div>
  )
}

export default CardReseñas;