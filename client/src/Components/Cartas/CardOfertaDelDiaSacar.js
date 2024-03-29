import React from 'react';
import '../../Pages/Styles/CardsOfertasDelDiaSacar.modules.css'

// import { agregarAlCarrito } from '../../redux/actions';
// import { useDispatch } from 'react-redux';


export default function CardOfertaDelDiaSacar({id, name, description, image, price, nationality}) {
//   const dispatch = useDispatch();
console.log(id, name, description, image, price, nationality)
             const eliminarDeCarrito=()=>{
            //     addToCartLocalStorage(id, name, price);
            //    dispatch(agregarAlCarrito({id, name, price, quantity: 1 }))
        console.log("hola") 
        }



    return (
        <div className='CardOfertaDelDia-sacar'>
            
            <div className='Cards-Ofertas-del-dia-sacar-zona-imagenes-carta-mas-boton'>
                <img src={image} alt='imagen de plato' className='Cards-Ofertas-del-dia-sacar-img-carta'></img>
            </div>

            <div className='Cards-Ofertas-del-dia-sacar-zona-info-plato-texto'>
       
            <h1 className='Cards-Ofertas-del-dia-sacar-titulo-plato-carta' >{name}</h1>
                <p className='Cards-Ofertas-del-dia-sacar-descripcion-plato-carta'>{description}</p>
                <div className='Cards-Ofertas-del-dia-sacar-precio-nacionalidad'>
                <p className='Cards-Ofertas-del-dia-sacar-precio-plato'>€{price}</p>
                <p className='Cards-Ofertas-del-dia-sacar-nacionalidad-plato'>{nationality}</p>
                </div>
               
                                <div className='Cards-Ofertas-del-dia-sacar-botones-edicion-plato'>
              
                                <button onClick={eliminarDeCarrito} className="Cards-Ofertas-del-dia-sacar-boton-eliminar-carrito-en-card">-</button>
                       


                                </div>

            </div>

        </div>
        );
    };
    
    