import React from 'react';
import '../../Pages/Styles/CardEliminarTag.modules.css'


function CardEliminarTag(props) {
let name = "Contiene maní"


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

    return (
        <div className='dash-board-tags-ventana-eliminar-tag-seleccionado-fondo'>
        <div className='dash-board-tags-ventana-eliminar-tag-seleccionado'>
            <form className='dash-board-tags-ventana-eliminar-tag-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-tag">
                <h1 className='dash-board-ventana-txt-titulo-tag'>¿Desea eliminar el tag, {name}?</h1>
                </div>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEliminarTag}>CANCELAR</button>
                <button className='dash-board-ventana-button'>ELIMINAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEliminarTag;