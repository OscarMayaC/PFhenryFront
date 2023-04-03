import React from 'react';
import '../../Pages/Styles/CardsOfertasDelDia.modules.css'

// import { agregarAlCarrito } from '../../redux/actions';
// import { useDispatch } from 'react-redux';


export default function CardOfertaDelDiaSacar({id, name, description, image, price, nationality}) {
//   const dispatch = useDispatch();

             const eliminarDeCarrito=()=>{
            //     addToCartLocalStorage(id, name, price);
            //    dispatch(agregarAlCarrito({id, name, price, quantity: 1 }))
        console.log("hola") 
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
              
                                <button onClick={eliminarDeCarrito} className="Cards-Ofertas-del-dia-boton-eliminar-carrito-en-card">-</button>
                       


                                </div>

            </div>

        </div>
        );
    };
    
    