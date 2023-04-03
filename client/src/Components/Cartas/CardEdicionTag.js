import React from 'react';
import '../../Pages/Styles/CardEdicionTag.modules.css'


function CardEdicionTag(props) {


    let name = "Contiene maní";
    

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
                <h1 className='dash-board-ventana-txt-titulo-tag'>{name}</h1>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nombre:</h1>
                <input className="dash-board-ventana-input" placeholder={name}></input>
                </div>
          

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEdicion}>CANCELAR</button>
                <button className='dash-board-ventana-button'>CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEdicionTag;