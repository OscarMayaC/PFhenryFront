import React from 'react';
import '../../Pages/Styles/CardEdicionInfoAdmin.modules.css'


function CardEdicionInfoAdmin(props) {


    let name = "Informacion Admin";
    function confirmarEdicion(e){
        e.preventDefault();
        toggleDiv();
    }

    function cancelarEdicion(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEdicion = document.getElementsByClassName("dash-board-info-admin-ventana-edicion-admin-seleccionado")
        let fondoEdicion = document.getElementsByClassName("dash-board-info-admin-ventana-edicion-admin-seleccionado-fondo")
        ventanaEdicion[0].style.display="none"
        fondoEdicion[0].style.display="none"
    }

    
    return (
        <div className='dash-board-info-admin-ventana-edicion-admin-seleccionado-fondo'>
        <div className='dash-board-info-admin-ventana-edicion-admin-seleccionado'>
            <form className='dash-board-info-admin-ventana-edicion-admin-seleccionado-form'>
                
                <div className="dash-board-ventana-form-div-titulo-admin">
                <h1 className='dash-board-ventana-txt-titulo-admin'>{name}</h1>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Nombre:</h1>
                <input className="dash-board-ventana-input" placeholder="Nombre nuevo..."></input>
                </div>
          
                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Email:</h1>
                <input className="dash-board-ventana-input" placeholder="Email nuevo..."></input>
                </div>

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Telefono:</h1>
                <input className="dash-board-ventana-input" placeholder="Telefono nuevo..."></input>
                </div>
          

                <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Direccion:</h1>
                <input className="dash-board-ventana-input" placeholder="Direccion nueva..."></input>
                </div>
          

            
          

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarEdicion}>CANCELAR</button>
                <button className='dash-board-ventana-button' onClick={confirmarEdicion}>CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardEdicionInfoAdmin;