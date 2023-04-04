import React, { useState }from 'react';
import '../../Pages/Styles/CardEdicionTag.modules.css'
import { editTagAdmin } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function CardEdicionTag(props) {
    const dispatch = useDispatch();
    // let ventanaEdicionTag = document.getElementsByClassName("dash-board-tags-ventana-edicion-tag-seleccionado")
    const [description, setDescription] = useState("");
    


    const handleDescriptionChange = (e) => {
        const inputDescription = e.target.value;
        // Puedes hacer cualquier validación que necesites aquí, como verificar que la descripción empiece con mayúscula, no contenga números, etc.
        setDescription(inputDescription);
      }

      const handleEditTag = async (e) => {
        e.preventDefault();
        try {
            dispatch(editTagAdmin({ id: 1, description: description }));
          // Hacer algo con la respuesta, como actualizar la lista de etiquetas, etc.
        //   console.log(response);
          toggleDiv();
        } catch (error) {
          console.error(error);
        }
      }


    function cancelarEdicion(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEdicion = document.getElementsByClassName("dash-board-tags-ventana-edicion-tag-seleccionado")
        let fondoEdicion = document.getElementsByClassName("dash-board-tags-ventana-edicion-tag-seleccionado-fondo")
        ventanaEdicion[0].style.display="none"
        fondoEdicion[0].style.display="none"
    }

    
    return (
        <div className='dash-board-tags-ventana-edicion-tag-seleccionado-fondo'>
        <div className='dash-board-tags-ventana-edicion-tag-seleccionado'>
            <form className='dash-board-tags-ventana-edicion-tag-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-tag">
                <h1 className='dash-board-ventana-txt-titulo-tag'>Modificación de tag</h1>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nuevo nombre:</h1>
                <input className="dash-board-ventana-input" value={description} onChange={handleDescriptionChange}></input>
            
                </div>
          

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEdicion}>CANCELAR</button>
                <button className='dash-board-ventana-button' onClick={handleEditTag}>CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEdicionTag;