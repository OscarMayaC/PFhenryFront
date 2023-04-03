import React from 'react';
import '../../Pages/Styles/CardEliminarPlato.modules.css'


function CardEliminarPlato(props) {
let name = "Empanadas Argentinas Veganas"


    function cancelarEliminar(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEliminar = document.getElementsByClassName("dash-board-platos-ventana-eliminar-plato-seleccionado")
        let fondoEliminar = document.getElementsByClassName("dash-board-platos-ventana-eliminar-plato-seleccionado-fondo")
        ventanaEliminar[0].style.display="none"
        fondoEliminar[0].style.display="none"
    }

    
    return (
        <div className='dash-board-platos-ventana-eliminar-plato-seleccionado-fondo'>
        <div className='dash-board-platos-ventana-eliminar-plato-seleccionado'>
            <form className='dash-board-platos-ventana-eliminar-plato-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-plato">
                <h1 className='dash-board-ventana-txt-titulo-plato'>¿Desea eliminar, {name}?</h1>
                </div>

            

                <div className="dash-board-ventana-imagen-div">
                <img className="dash-board-ventana-imagen" alt={"imagen" + name}></img>
                </div>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEliminar}>CANCELAR</button>
                <button className='dash-board-ventana-button'>ELIMINAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEliminarPlato;