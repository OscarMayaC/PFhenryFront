import React from 'react'
import { useSelector } from 'react-redux'
import '../SASS/Reservas-perfil.modules.css'


const ReservasPerfil = () => {

    const myUser = useSelector((state) => state.userData )

    const id = "4"
    const fecha = "15/04/2023"
    const hora = "21:30"
    const detalle = "ta weno el sitio"
    const estado = "Reservado"


    return (
        <div className='reservas-info-main'>
            <div className='div-reservas-perfil'>
                <p className='reservas-p'>Fecha</p>
                <p className='reservas-p'>Hora</p>
                <p className='reservas-p'>Detalle</p>
                <p className='reservas-p'>Estado</p>
            </div>

            <div className='reservas-scroll'>
            {
                myUser.bookings?.map((r) => {
                    return (
                        <div className='div-reservas-perfil' key={r.id}>
                        <p className='p-reservas-perfil'>{}</p>
                        <p className='p-reservas-perfil'>{}</p>
                        <p className='p-reservas-perfil'>{}</p>
                        <p className='p-reservas-perfil'>{}</p>
                        </div>
                    )
                })
            }
            </div>
            
            
        </div>
    )
}

export default ReservasPerfil;