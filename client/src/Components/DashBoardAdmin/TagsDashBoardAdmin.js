import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from '../../redux/actions';
import CardEliminarTag from '../Cartas/CardEliminarTag';
import CardEdicionTag from '../Cartas/CardEdicionTag';
import '../../Pages/Styles/TagsDashBoardAdmin.modules.css'

function TagsDashBoardAdmin(props) {
    const dispatch = useDispatch();
    const allTagsSeccion = useSelector((state) => state.allTags)


    useEffect(() => {

        dispatch(getAllTags());


      }, [dispatch]);

      const editarTag=(e)=>{
        let ventanaTag = document.getElementsByClassName("dash-board-tags-ventana-edicion-tag-seleccionado")
        let fondoTag = document.getElementsByClassName("dash-board-tags-ventana-edicion-tag-seleccionado-fondo")
        ventanaTag[0].style.display="flex"
        fondoTag[0].style.display="flex"
        // console.log(ventanaTag)
    }


    const eliminarTag=()=>{
        let ventanaEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado")
        let fondoEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado-fondo")
        ventanaEliminarTag[0].style.display="flex"
        fondoEliminarTag[0].style.display="flex"
    }

const agregarTags=(event)=>{
  event.preventDefault()
  alert("Creado con exito")
}

    return (
        <div className="dash-board-tags-component">
                <CardEliminarTag></CardEliminarTag>
                <CardEdicionTag></CardEdicionTag>

        <div className='dash-board-tags-inner'>
            <h1 className='dash-board-tags-titulo'> TAGS existentes </h1>
            <div className='dash-board-renderizado-tags'>
        {allTagsSeccion?.map((e) => {
                                                     
                                                     return (
                                                       <div key={e.id}>    
                                         
                                                         <button className='dash-board-tags-boton-seleccion-tags' value={e.description}>{e.description}</button>
                                                         <button className='dash-board-tags-editar-boton' onClick={editarTag}>...</button>
                                                         <button className='dash-board-tags-eliminar-boton' onClick={eliminarTag}>X</button>
                                                       </div>
                                                     );
                                                       })}   
                                                       
            </div>

            <form className='dash-board-tags-form'>
                <input className='dash-board-tags-input'></input>
                <button className='dash-board-tags-agregar-boton' onClick={agregarTags}>AGREGAR</button>
            </form>
        </div>

        </div>
    );
}

export default TagsDashBoardAdmin;