import React from 'react';
import { deleteTagAdmin } from '../../redux/actions/index';
import '../../Pages/Styles/CardEliminarTag.modules.css'
import { useDispatch,useSelector } from 'react-redux';


function CardEliminarTag(props) {
    const dispatch = useDispatch();
    const tag = useSelector((state) => state.idTag)

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



    const handleEliminarTag = (e) => {
        e.preventDefault();
        try {
            dispatch(deleteTagAdmin(tag));
            toggleDiv();
        } catch (error) {
            console.error(error);
        }
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
                <button className='dash-board-ventana-button'onClick={handleEliminarTag}>ELIMINAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEliminarTag;