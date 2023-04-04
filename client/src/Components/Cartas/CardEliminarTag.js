import React, { useState } from 'react';
import { deleteTagAdmin } from '../../redux/actions/index';
import '../../Pages/Styles/CardEliminarTag.modules.css'
import { useDispatch } from 'react-redux';


function CardEliminarTag(props) {
    const dispatch = useDispatch();

    function cancelarEliminarTag(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado")
        let fondoEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado-fondo")
        ventanaEliminarTag[0].style.display="none"
        fondoEliminarTag[0].style.display="none"
    }

    const [loading, setLoading] = useState(false);


    const handleEliminarTag = (e) => {
        e.preventDefault();
        let ventanaEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado")
        // let fondoEliminarTag = document.getElementsByClassName("dash-board-tags-ventana-eliminar-tag-seleccionado-fondo")
        const payload = {
        id: ventanaEliminarTag[0].id,
      };
  
      setLoading(true);
  
      dispatch(deleteTagAdmin(payload))
        .then(response => {
          // Manejar la respuesta exitosa del servidor aquí
          console.log(response);
        })
        .catch(error => {
          // Manejar el error aquí
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    return (
        <div className='dash-board-tags-ventana-eliminar-tag-seleccionado-fondo'>
        <div className='dash-board-tags-ventana-eliminar-tag-seleccionado'>
            <form className='dash-board-tags-ventana-eliminar-tag-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-tag">
                <h1 className='dash-board-ventana-txt-titulo-tag'>¿Esta seguro que desea eliminar el tag?</h1>
                </div>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEliminarTag}>CANCELAR</button>
                <button className='dash-board-ventana-button'onClick={handleEliminarTag} disabled={loading}>ELIMINAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEliminarTag;