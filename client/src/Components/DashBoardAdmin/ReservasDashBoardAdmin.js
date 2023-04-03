import React from 'react';
import '../../Pages/Styles/ReservasDashBoardAdmin.modules.css'
// import { useSelector } from "react-redux"

function ReservasDashBoardAdmin(props) {
 // const reservasHistorial = useSelector((state) => state.userData)


    return (
        <div className="dash-board-reservas-component">
                           <div className='dash-board-reservas-titulos'>
                           <p className='dash-board-reservas-titles'>Fecha</p>
                           <p className='dash-board-reservas-titles'>Hora</p>
                           <p className='dash-board-reservas-titles'>Detalle</p>
                           <p className='dash-board-reservas-titles'>Estado</p>
                           <p className='dash-board-reservas-titles'>Usuario</p>
                   </div>

            <div className='dash-board-reservas-scroll'>
            {/* {
                reservasHistorial.bookings?.map((p) => {
                    return (
                        <div className='dash-board-reservas-matriz' key={p.id}>
                        <p className='dash-board-reservas-data'>{p.date_delivery}</p>
                        <p className='dash-board-reservas-data'>{p.time_delivery}</p>
                        <p className='dash-board-reservas-data'>{p.description}</p>
                        <p className='dash-board-reservas-data'>{p.total_price}</p>
                         <p className='dash-board-reservas-data'>{p.user}</p>
                        </div>
                    )
                })
            } */}
            </div>
            
        </div>
    );
}

export default ReservasDashBoardAdmin;