import React from 'react'
import '../SASS/Perfil-info.modules.css'
import user from "../../Pages/Misc/user.png"
import { useSelector } from 'react-redux'
import CambiarDatos from './CambiarDatos'



const PerfilInfo = () => {

    const myUser = useSelector((state) => state.userData)

    const handleEditInfo = (e) => {
        console.log("haz hecho algo")
        let ventanaAgregar = document.getElementsByClassName("cambiar-datos-ventana")
        let fondoAgregar = document.getElementsByClassName("cambiar-datos-fondo-ventana")
        ventanaAgregar[0].style.display="flex"
        fondoAgregar[0].style.display="flex"
    }

    return (
        <div className='perfil-info-main'>
            <CambiarDatos />
            <div className='btn-info-user'>
                <img src={user} alt='imagen sin colocar' width="70px" height="50px"></img>
                {/* <button className='option-buttons'>...</button> */}
            </div>

            <div className='btn-info-user'>
                <h2>Nombre: {myUser.name}</h2>
                {/* <button className='option-buttons' onClick={(e) => handleNameChange(e)}>...</button> */}
            </div>

            <div className='btn-info-user'>
                <h3>Email: {myUser.email}</h3>
                {/* <button className='option-buttons' onClick={(e) => handleEmailChange(e)}>...</button> */}
            </div>

            <div className='btn-info-user'>
                <h4>Celular: {myUser.phoneNumber}</h4>
                {/* <button className='option-buttons' onClick={(e) => handlePhoneChange(e)}>...</button> */}
            </div>

            <div className='btn-info-user'>
                <p>{myUser.Addresses}</p>
                {/* <button className='btn-direcciones'>+</button> */}
                {/* <button className='option-buttons'>...</button> */}
            </div>
            <div>
                <button className='info-edit' onClick={handleEditInfo}>Editar Info</button>
            </div>
        </div>
    )
}

export default PerfilInfo;