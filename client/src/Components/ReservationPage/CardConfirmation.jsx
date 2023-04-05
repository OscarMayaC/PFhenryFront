import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function CardConfirmation(){

    const history = useHistory()

    const { reserva } = useSelector(state => state)

    const response = []

    for (const propiedad in reserva) {
        const valor = reserva[propiedad];
        if(propiedad === 'date_start'){
            if(valor){
            response.push(
            <ul key={propiedad}>
                <strong className="propiedad">{propiedad === 'date_start' && 'Dia:'}</strong> <span className="valor">{valor}</span>
            </ul>
            )}
        }
        if(propiedad === 'time_start'){
            if(valor){
                response.push(
                <ul key={propiedad}>
                    <strong className="propiedad">{propiedad === 'time_start' && 'Hora:'}</strong> <span className="valor1">{valor}</span>
                </ul>
                )}
        }
        if(propiedad === 'costumers_quantity'){
            if(valor){
                response.push(
                <ul key={propiedad}>
                    <strong className="propiedad">{propiedad === 'costumers_quantity' && 'Numero de comensales:'}</strong> <span className="valor2">{valor}</span>
                </ul>
                )}
        }
        if(propiedad === 'tableId'){
            if(valor){
                response.push(
                <ul key={propiedad}>
                    <strong className="propiedad">{propiedad === 'tableId' && 'No. Mesa:'}</strong> <span className="valor3">{valor}</span>
                </ul>
                )}
        }
        if(propiedad === 'note'){
            if(valor){
                response.push(
                <ul key={propiedad}>
                    <strong className="propiedad">{propiedad === 'note' && 'Nota:'}</strong> <span className="valor4">{valor}</span>
                </ul>
                )}
        }
    };

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <div className="card">
            <h2 className="title-card">Reserva Confirmada</h2>
            <br/>
            <span className="info-card">{response}</span>
            <br/>
            <h4 className="leyenda">GRACIAS POR SU PREFERENCIA</h4>
            <button onClick={handleBackClick} className="otra-reserva">Hacer otra reserva</button>
        </div>
    )
};

export default CardConfirmation;