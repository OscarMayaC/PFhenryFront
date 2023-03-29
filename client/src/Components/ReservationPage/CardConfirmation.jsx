import React from "react";
import { useSelector } from "react-redux";

function CardConfirmation(){
    
    const { reserva } = useSelector(state => state)
  console.log(reserva)

    return (
        <div>
            <h2>Reserva Confirmada</h2>
        </div>
    )
};

export default CardConfirmation;