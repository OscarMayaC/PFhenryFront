import React from 'react'
import { deleteBookingUser } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import ConfirmationDeleteBooking from './AlertConfirmationDeleteBooking';
import { useState } from 'react';

export default function CardBooking(props) {

    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    function cancelBooking() {
        //se harcodea el segundo parametro que es el id del usuario en lo que se ve la manera final de obtenerlo.
        dispatch(deleteBookingUser(props.idBooking, 8))
        setShowAlert(false);
    }

    function notCancelBooking() {
        setShowAlert(false);
    }

    return (
        <div>
            <h1>Fecha de la reserva: {props.date_start}</h1>
            <h1>Hora de inicio de la reserva: {props.time_start}</h1>
            <h1>Fecha de finalizacion de la reserva: {props.date_end}</h1>
            <h1>Hora de finalizacion de la reserva: {props.time_end}</h1>
            <h1>Cantidad de comensales: {props.costumers_quantity}</h1>
            <button>Editar Reserva</button>
            <button onClick={() => setShowAlert(true)}>Cancelar Reserva</button>
            {showAlert && (
                <ConfirmationDeleteBooking
                    cancelBooking={cancelBooking}
                    notCancelBooking={notCancelBooking}
                />
            )}

        </div>
    )
}
