import React from 'react'
import { useEffect } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import '../SASS/Pedidos-perfil.modules.css'



const Pedidos = () => {

    const myUser = useSelector((state) => state.userData)
    
    console.log(myUser.Orders)


    return (
        <div className='pedidos-info-main'>
            <div className='pedidos-p-titulos'>
                <p className='pedidos-p-titles'>Fecha</p>
                <p className='pedidos-p-titles'>Hora</p>
                <p className='pedidos-p-titles'>Detalle</p>
                <p className='pedidos-p-titles'>Precio Total</p>
            </div>

            <div className='pedidos-scroll'>
            {
                myUser.Orders?.map((p) => {
                    return (
                        <div className='pedidos-p-matriz' key={p.id}>
                        <p className='pedidos-p'>{p.date_delivery}</p>
                        <p className='pedidos-p'>{p.time_delivery}</p>
                        <p className='pedidos-p'>{p.description}</p>
                        <p className='pedidos-p'>{p.total_price}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Pedidos;