import React from 'react'
import '../SASS/Perfil-info.modules.css'
import user from "../../Pages/Misc/user.png"
import { useSelector } from 'react-redux'



const PerfilInfo = () => {

    const myUser = useSelector((state) => state.userData)

    return (
        <div className='perfil-info-main'>
            <div className='btn-info-user'>
                <img src={user} alt='imagen sin colocar' width="70px" height="50px"></img>
                <button>...</button>
            </div>

            <div className='btn-info-user'>
                <h1>{myUser.name}</h1>
                <button>...</button>
            </div>

            <div className='btn-info-user'>
                <h3>{myUser.email}</h3>
                <button>...</button>
            </div>

            <div className='btn-info-user'>
                <h4>{myUser.phoneNumber}</h4>
                <button>...</button>
            </div>

            <div className='btn-info-user'>
                <p>{myUser.Addresses}</p>
                <button className='btn-direcciones'>+</button>
                <button>...</button>
            </div>
        </div>
    )
}

export default PerfilInfo;