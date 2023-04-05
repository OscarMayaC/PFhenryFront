import React, { useEffect }  from 'react';
import '../../Pages/Styles/PedidosDashBoardAdmin.modules.css';
import { useSelector, useDispatch  } from "react-redux"
import { getPedidosAdmin } from '../../redux/actions';

function PedidosDashBoardAdmin(props) {
    const dispatch = useDispatch();
     const pedidos = useSelector((state) => state.OrdersAdminTotal)
 
 useEffect(() => {
     dispatch(getPedidosAdmin());
   }, [dispatch]);

    return (
        <div className='dash-board-pedidos-component'>
                   <div className='dash-board-pedidos-titulos'>
                        <p className='dash-board-pedidos-titles'>User ID</p>
                        <p className='dash-board-pedidos-titles'>Fecha</p>
                        <p className='dash-board-pedidos-titles-description'>Descripción</p>
                        <p className='dash-board-pedidos-titles'>Hora pedido</p>
                        <p className='dash-board-pedidos-titles'>Hora llegada</p>
                        <p className='dash-board-pedidos-titles'>Precio Total</p>
                        
                   </div>

            <div className='dash-board-pedidos-scroll'>
          {
                pedidos?.map((p) => {
                    return (
                        <div className='dash-board-pedidos-matriz' key={p.id}>
                        <p className='dash-board-pedidos-data'>{p.id}</p>  
                        <p className='dash-board-pedidos-data'>{p.date_delivery}</p>
                        <p className='dash-board-pedidos-data-description'>{p.description}</p>
                        <p className='dash-board-pedidos-data'>{p.time_start}</p>
                        <p className='dash-board-pedidos-data'>{p.time_delivery}</p>
                        <p className='dash-board-pedidos-data'>{p.total_price}</p> 

                        </div>
                    )
                })
            } 
            </div>
            
        </div>
    );
}

export default PedidosDashBoardAdmin;