import React from 'react';
import '../../Pages/Styles/CardCrearPlato.modules.css'


function CardAgregarPlato(props) {


    let image = "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2022-09/plato-unico.jpg.webp?itok=0ZB-bG3S"
  

    function cancelarAgregar(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado")
        let fondoAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado-fondo")
        ventanaAgregar[0].style.display="none"
        fondoAgregar[0].style.display="none"
    }

    
    return (
        <div className='dash-board-platos-ventana-agregar-plato-seleccionado-fondo'>
        <div className='dash-board-platos-ventana-agregar-plato-seleccionado'>
            <form className='dash-board-platos-ventana-agregar-plato-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-plato">
                <h1 className='dash-board-ventana-txt-titulo-plato'>CREA TU PLATO!!!</h1>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nombre:</h1>
                <input className="dash-board-ventana-input" placeholder="El nombre del nuevo plato..."></input>
                </div>
          
                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Descripción:</h1>
                <input className="dash-board-ventana-input" placeholder="Describe el plato..."></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Imagen:</h1>
                <input className="dash-board-ventana-input" placeholder={image}></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Precio:</h1>
                <input className="dash-board-ventana-input" placeholder='Precio exacto de tu plato...'></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nacionalidad:</h1>
                <input className="dash-board-ventana-input" placeholder='Origen del plato...'></input>
                </div>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarAgregar}>CANCELAR</button>
                <button className='dash-board-ventana-button'>CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardAgregarPlato;