import React from 'react';
import '../../Pages/Styles/CardEdicionPlato.modules.css'


function CardEdicionPlato(props) {


    let name = "Empanadas Argentinas Veganas";
    let description = "Masa frita o al horno, con relleno de carne, huevo, aceitunas, cebolla, morrón, tomate y ajo"
    let image = "https:www.google.com/image/berenjena-al-escabeche"
    let price = "€1.5"
    let nationality = "Argentino"

    function cancelarEdicion(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado")
        let fondoEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado-fondo")
        ventanaEdicion[0].style.display="none"
        fondoEdicion[0].style.display="none"
    }

    
    return (
        <div className='dash-board-platos-ventana-edicion-plato-seleccionado-fondo'>
        <div className='dash-board-platos-ventana-edicion-plato-seleccionado'>
            <form className='dash-board-platos-ventana-edicion-plato-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-plato">
                <h1 className='dash-board-ventana-txt-titulo-plato'>{name}</h1>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nombre:</h1>
                <input className="dash-board-ventana-input" placeholder={name}></input>
                </div>
          
                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Descripción:</h1>
                <input className="dash-board-ventana-input" placeholder={description}></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Imagen:</h1>
                <input className="dash-board-ventana-input" placeholder={image}></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Precio:</h1>
                <input className="dash-board-ventana-input" placeholder={price}></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nacionalidad:</h1>
                <input className="dash-board-ventana-input" placeholder={nationality}></input>
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

export default CardEdicionPlato;