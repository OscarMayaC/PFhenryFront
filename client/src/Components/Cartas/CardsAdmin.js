import React from 'react';
import '../../Pages/Styles/CardsAdmin.modules.css'
import { idDish, dataForEditDish} from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function CardsAdmin({id, name, description, image, price, nationality}) {
    
    const dispatch = useDispatch();

                    const editarPlato=(event)=>{
                        let ventanaEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado")
                        let fondoEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado-fondo")
                        ventanaEdicion[0].style.display="flex"
                        fondoEdicion[0].style.display="flex"
                        dispatch(dataForEditDish({id:id, name:name, description:description, image:image, price:price, nationality:nationality}))
                        dispatch(idDish(id))
                    }


                    const eliminarDeCarrito=(event)=>{
                        let ventanaEliminar = document.getElementsByClassName("dash-board-platos-ventana-eliminar-plato-seleccionado")
                        let fondoEliminar = document.getElementsByClassName("dash-board-platos-ventana-eliminar-plato-seleccionado-fondo")
                        ventanaEliminar[0].style.display="flex"
                        fondoEliminar[0].style.display="flex"
                        dispatch(idDish(id))
                    }



    return (
        <div className='CardsAdmin'>
            
            <div className='Cards-Admin-zona-imagenes-carta-mas-boton'>
                <img src={image} alt='imagen de plato' className='Cards-Admin-img-carta'></img>
               
               <div className='Cards-Admin-botones-edicion-plato'>
                <div className='Cards-Admin-circulo-div-eliminar-carrito'>
                <button onClick={eliminarDeCarrito} className="Cards-Admin-boton-eliminar-carrito-en-card">X</button>
                </div>
                
                <div className='Cards-Admin-circulo-div-editar-plato-en-carrito'>
                <button onClick={editarPlato} className="Cards-Admin-boton-editar-plato-en-card">...</button>
                </div>
               </div>

            </div>
            <div className='Cards-Admin-zona-info-plato-texto'>
            <h1 className='Cards-Admin-titulo-plato-carta' >{name}</h1>
                <p className='Cards-Admin-descripcion-plato-carta'>{description}</p>
                <p className='Cards-Admin-precio-plato'>€{price}</p>
                <p className='Cards-Admin-nacionalidad-plato'>{nationality}</p>

            </div>

        </div>
        );
    };
    
    