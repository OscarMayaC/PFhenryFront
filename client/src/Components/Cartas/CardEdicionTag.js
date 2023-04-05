import React, { useState }from 'react';
import '../../Pages/Styles/CardEdicionTag.modules.css'
import { editTagAdmin } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function CardEdicionTag(props) {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const tag = useSelector((state) => state.idTag)


    const handleDescriptionChange = (e) => {
        const inputDescription = e.target.value;
        setDescription(inputDescription);
      }

      const handleEditTag = async (e) => {
        e.preventDefault();
        // console.log(tag +" "+ description)
        try {
            dispatch(editTagAdmin({ id:tag, description: description }));
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