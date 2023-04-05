import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, crearTagAdmin, idTag} from '../../redux/actions';
import CardEliminarTag from '../Cartas/CardEliminarTag';
import CardEdicionTag from '../Cartas/CardEdicionTag';
import '../../Pages/Styles/TagsDashBoardAdmin.modules.css';


function TagsDashBoardAdmin(props) {
  const dispatch = useDispatch();
  const allTagsSeccion = useSelector((state) => state.allTags);
 

    // AGREGAR TAG NUEVO
    const [tagInput, setTagInput] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
  
    const handleTagInputChange = (event) => {
      setTagInput(event.target.value);
      setIsInputValid(/^[a-zA-Z\s]+$/.test(event.target.value));
    };
  
    const agregarTags = (event) => {
      event.preventDefault();
      console.log(isInputValid)

      if (typeof tagInput === "string") {
        const nuevoTag = {
          description: tagInput
        };
        dispatch(crearTagAdmin(nuevoTag));
        setTagInput('');
      setIsInputValid(false);

      } else {
        alert("Solo se permiten valores de tipo texto");
      }

    };



  const editarTags = (event) => {
    let ventanaEditarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-edicion-tag-seleccionado'
    );
    let fondoEditarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-edicion-tag-seleccionado-fondo'
    );
    ventanaEditarTag[0].style.display = 'flex';
    fondoEditarTag[0].style.display = 'flex';
    const idTagkey = event.target.getAttribute('id');
    dispatch(idTag(idTagkey))
    console.log(idTagkey)
    };


  const eliminarTags = (event) => {
    // ABRIDOR DE VENTANA
    let ventanaEliminarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-eliminar-tag-seleccionado'
    );
    let fondoEliminarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-eliminar-tag-seleccionado-fondo'
    );
    ventanaEliminarTag[0].style.display = 'flex';
    fondoEliminarTag[0].style.display = 'flex';

    const idTagDelete = event.target.getAttribute('id');
    dispatch(idTag(idTagDelete))
  };



  useEffect(() => {
    dispatch(getAllTags());

}, [dispatch]);

  return (
    <div className="dash-board-tags-component">
      <CardEliminarTag />
      <CardEdicionTag />

      <div className="dash-board-tags-inner">
        <h1 className="dash-board-tags-titulo"> TAGS existentes </h1>
        <div className="dash-board-renderizado-tags">
          {allTagsSeccion?.map((e) => {
       
            return (
              <div className="dash-board-tags-div-seleccion" key={e.id}>    
                                         
                                                         <button className='dash-board-tags-boton-seleccion-tags' value={e.description} key={e.id+"a"}>{e.description}</button>
                                                         <button className='dash-board-tags-editar-boton' onClick={editarTags} id={e.id} key={e.id+"ab"}>...</button>
                                                         <button className='dash-board-tags-eliminar-boton' onClick={eliminarTags} id={e.id} key={e.id+"abc"}>X</button>
                                                       </div>
                                                     );
                                                       })}   
                                                       
            </div>
              <form className='dash-board-tags-form'>
                <input className='dash-board-tags-input' value={tagInput} onChange={handleTagInputChange} placeholder='Su nuevo tag aquí...'></input>
                <button className='dash-board-tags-agregar-boton' onClick={agregarTags} disabled={!isInputValid}>AGREGAR</button>
              </form>

        </div>

        </div>
    );
}

export default TagsDashBoardAdmin;