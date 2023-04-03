import React from 'react';
import '../../Pages/Styles/PedidosDashBoardAdmin.modules.css';
// import { useSelector } from "react-redux";


function PedidosDashBoardAdmin(props) {
    // const platosHistorial = useSelector((state) => state.userData)



    return (
        <div className='dash-board-pedidos-component'>
                   <div className='dash-board-pedidos-titulos'>
                        <p className='dash-board-pedidos-titles'>Fecha</p>
                        <p className='dash-board-pedidos-titles'>Hora</p>
                        <p className='dash-board-pedidos-titles'>Detalle</p>
                        <p className='dash-board-pedidos-titles'>Precio Total</p>
                        <p className='dash-board-pedidos-titles'>Usuario</p>
                   </div>

            <div className='dash-board-pedidos-scroll'>
            {/* {
                platosHistorial.Orders?.map((p) => {
                    return (
                        <div className='dash-board-pedidos-matriz' key={p.id}>
                        <p className='dash-board-pedidos-data'>{p.date_delivery}</p>
                        <p className='dash-board-pedidos-data'>{p.time_delivery}</p>
                        <p className='dash-board-pedidos-data'>{p.description}</p>
                        <p className='dash-board-pedidos-data'>{p.total_price}</p>
                         <p className='dash-board-pedidos-data'>{p.user}</p>
                        </div>
                    )
                })
            } */}
            </div>
            
        </div>
    );
}

export default PedidosDashBoardAdmin;