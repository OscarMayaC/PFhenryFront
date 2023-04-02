import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function CardConfirmation(){

    const history = useHistory()

    const { reserva } = useSelector(state => state)

    const response = []

    for (const propiedad in reserva) {
        const valor = reserva[propiedad];
        if(propiedad === 'date_start' || 
           propiedad === 'time_start' || 
           propiedad === 'costumers_quantity' || 
           propiedad === 'tableId' ||
           propiedad === 'note'){
            if(valor){
            response.push(
            <ul key={propiedad}>
                <strong>{propiedad}:</strong> {valor}
            </ul>
            )}
        }
    };

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <div>
            <h2>Reserva Confirmada</h2>
            <br/>
            <span>{response}</span>
            <br/>
            <h4>GRACIAS POR SU PREFERENCIA</h4>
            <button onClick={handleBackClick}>Hacer otra reserva</button>
        </div>
    )
};

export default CardConfirmation;