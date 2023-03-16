import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import "../SASS/IniciarSesion.modules.css"



const IniciarSesion = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div> 


            <div className='main-container'>
                <p>¿Cúal es tú número de teléfono o correo electrónico?</p>

                <form>
                    <input type="text" name="mail_tlf" placeholder="Ingrese su número o correo"></input>
                    <button>Continuar</button>
                </form>
                
                <Link to="/register"><button>Registarse</button></Link>
                
            </div>
        </div>  
    )
}

export default IniciarSesion;