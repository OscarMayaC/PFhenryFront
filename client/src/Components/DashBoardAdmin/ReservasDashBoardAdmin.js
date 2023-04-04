import React, { useEffect } from 'react';
import '../../Pages/Styles/ReservasDashBoardAdmin.modules.css'
import { useSelector, useDispatch  } from "react-redux"
import { getReservasAdmin } from '../../redux/actions/index';


function ReservasDashBoardAdmin(props) {
    const dispatch = useDispatch();
     const reservas = useSelector((state) => state.reservasAdminTotal)
 
 useEffect(() => {
     dispatch(getReservasAdmin());
   }, [dispatch]);

    return (
        <div className="dash-board-reservas-component">
                           <div className='dash-board-reservas-titulos'>
                           <p className='dash-board-reservas-titles'>Usuario</p>
                           <p className='dash-board-reservas-titles-Email'>Email</p>
                           <p className='dash-board-reservas-titles-Clientes'>Clientes</p>
                           <p className='dash-board-reservas-titles-Mesa'>Mesa</p>
                           <p className='dash-board-reservas-titles'>Fecha</p>
                           <p className='dash-board-reservas-titles'>Hora</p>
                           
                           
                           
                   </div>

            <div className='dash-board-reservas-scroll'>
             {
                reservas?.map((p) => {
                    return (
                        <div className='dash-board-reservas-matriz' key={p.id}>
                        <p className='dash-board-reservas-data'>{p.User.name}</p>
                        <p className='dash-board-reservas-data-email'>{p.User.email}</p>
                        <p className='dash-board-reservas-data'>{p.costumers_quantity}</p>
                        <p className='dash-board-reservas-data'>{p.tableId}</p>
                        <p className='dash-board-reservas-data'>{p.time_start}</p>
                         <p className='dash-board-reservas-data'>{p.date_start}</p>
                         
                        </div>
                    )
                })
            }
            
            </div>
            
        </div>
    );
}

export default ReservasDashBoardAdmin;