import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, crearTagAdmin} from '../../redux/actions';
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



  const editarTag = (event) => {
    let ventanaEditarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-edicion-tag-seleccionado'
    );
    let fondoEditarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-edicion-tag-seleccionado-fondo'
    );
    ventanaEditarTag[0].style.display = 'flex';
    fondoEditarTag[0].style.display = 'flex';

    // OBTENER VALOR DEL BOTÓN "Contiene gluten" CORRESPONDIENTE
    // const valorBoton = event.target.previousElementSibling.previousElementSibling.value;
    // console.log(valorBoton);

    // OBTENEDOR DE ID PROPIA DEL TAG A SU IZQUIERDA
    const key = event.target.getAttribute('id');
    console.log(key)
    // ASIGNAR VALOR DE key AL ATRIBUTO id DEL ELEMENTO ventanaEliminarTag
    ventanaEditarTag[0].setAttribute('id', key);
    fondoEditarTag[0].setAttribute('id', key);
  };

  const eliminarTag = (event) => {
    // ABRIDOR DE VENTANA
    let ventanaEliminarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-eliminar-tag-seleccionado'
    );
    let fondoEliminarTag = document.getElementsByClassName(
      'dash-board-tags-ventana-eliminar-tag-seleccionado-fondo'
    );
    ventanaEliminarTag[0].style.display = 'flex';
    fondoEliminarTag[0].style.display = 'flex';

    // OBTENER VALOR DEL BOTÓN "Contiene gluten" CORRESPONDIENTE
    // const valorBoton = event.target.previousElementSibling.previousElementSibling.value;
    // console.log(valorBoton);

    // OBTENEDOR DE ID PROPIA DEL TAG A SU IZQUIERDA
    const key = event.target.getAttribute('id');
    console.log(key)
    // ASIGNAR VALOR DE key AL ATRIBUTO id DEL ELEMENTO ventanaEliminarTag
    ventanaEliminarTag[0].setAttribute('id', key);
    fondoEliminarTag[0].setAttribute('id', key);
  };



  useEffect(() => {
    dispatch(getAllTags());


    const botonesEliminar = document.querySelectorAll(".dash-board-tags-eliminar-boton");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", eliminarTag);
    });
  
    const botonesEditar = document.querySelectorAll(".dash-board-tags-editar-boton");
    botonesEditar.forEach((boton) => {
      boton.addEventListener("click", editarTag);
    });
  
    return () => {
      botonesEliminar.forEach((boton) => {
        boton.removeEventListener("click", eliminarTag);
      });
  
      botonesEditar.forEach((boton) => {
        boton.removeEventListener("click", editarTag);
      });
    };
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
                                         
                                                         <button className='dash-board-tags-boton-seleccion-tags' value={e.description}>{e.description}</button>
                                                         <button className='dash-board-tags-editar-boton' onClick={editarTag} id={e.id} key={e.id}>...</button>
                                                         <button className='dash-board-tags-eliminar-boton' onClick={eliminarTag} id={e.id} key={e.id}>X</button>
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