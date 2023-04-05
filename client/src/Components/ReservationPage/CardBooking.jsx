import React from 'react'
import { deleteBookingUser, saveIdBookingUpdate, saveInfoBooking } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import ConfirmationDeleteBooking from './AlertConfirmationDeleteBooking';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function CardBooking(props) {

    const history = useHistory();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [showButtons, setShowButtons] = useState(true);
    function buttonsController() {
        const dateBooking = new Date(props.date_start);
        const dateToday = new Date();
        if (dateBooking.getTime() <= dateToday.getTime()) {
            setShowButtons(false);
        }
    }

    useEffect(() => {
        buttonsController();
    }, []);

    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    function cancelBooking() {
        dispatch(deleteBookingUser(props.idBooking, userId))
        setShowAlert(false);
    }

    function notCancelBooking() {
        setShowAlert(false);
    }

    function editBookingButton() {
        dispatch(saveIdBookingUpdate(props.idBooking));
        dispatch(saveInfoBooking(props))
        history.push('/reservation')
    }

    return (
        <div>
            <h1>Usuario: {props.UserId}</h1>
            <h1>Fecha de la reserva: {props.date_start}</h1>
            <h1>Hora de inicio de la reserva: {props.time_start}</h1>
            <h1>Fecha de finalizacion de la reserva: {props.date_end}</h1>
            <h1>Hora de finalizacion de la reserva: {props.time_end}</h1>
            <h1>Cantidad de comensales: {props.costumers_quantity}</h1>
            <h1>Mesa: {props.tableId}</h1>
            {
                showButtons && <button onClick={editBookingButton}>Editar Reserva</button>
            }
            {
                showButtons && <button onClick={() => setShowAlert(true)}>Cancelar Reserva</button>
            }
            {showAlert && (
                <ConfirmationDeleteBooking
                    cancelBooking={cancelBooking}
                    notCancelBooking={notCancelBooking}
                />
            )}
        </div>
    )
}
