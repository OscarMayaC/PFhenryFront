import React from 'react'
import { useSelector } from 'react-redux'
import '../SASS/Reservas-perfil.modules.css'


const ReservasPerfil = () => {

    const myUser = useSelector((state) => state.userData)




    return (
        <div className='reservas-info-main'>
            <div className='div-reservas-perfil'>
                <p className='reservas-p'>Fecha</p>
                <p className='reservas-p'>Hora</p>
                <p className='reservas-p'>Detalle</p>
            </div>

            <div className='reservas-scroll'>
                {
                    myUser.bookings?.map((r) => {
                        return (
                            <div className='div-reservas-perfil' key={r.id}>
                                <p className='p-reservas-perfil'>{r.date_start}</p>
                                <p className='p-reservas-perfil'>{r.time_start}</p>
                                <p className='p-reservas-perfil'>{r.note}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ReservasPerfil;