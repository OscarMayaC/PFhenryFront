import React, { useEffect, useState } from "react";
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from '../ReservationValidations/FormatConverter';
import { validationDate } from "../ReservationValidations/ValidationDate";
import { useDispatch, useSelector } from "react-redux";
import { getTables, putBooking } from "../../redux/actions/index.js";

function EditReservation(props){

    const { selectedMesaId, confirmTable, setConfirmSearchTables } = props

    const userId = JSON.parse(localStorage.getItem("userId"));

    const { infoBooking, bookingUpdateId, responseBooking } = useSelector(state => state)

    const [dataBookingSaved, setDataBookingSaved] = useState({
        fecha_inicio: infoBooking.date_start,
        hora_inicio: infoBooking.time_start,
        cantidad_comensales: infoBooking.costumers_quantity,
        nota: infoBooking.note
    })

    const [selectedDate, setSelectedDate] = useState(new Date(`${infoBooking.date_start}T${infoBooking.time_start}`));

    const {today, day, minSelectableTime} = validationDate(selectedDate);

    const [newDateFormat, setNewDateFormat] = useState({
        fecha_inicio: infoBooking.date_start,
        hora_inicio: infoBooking.time_start
    });
    
    const dispatch = useDispatch();

    useEffect(() => {
        setNewDateFormat(converter(selectedDate));
      }, [selectedDate]);


    const handleTableSubmit = (event) => {
        event.preventDefault();
    
        const info = {
            fecha_inicio: newDateFormat.fecha_inicio, 
            hora_inicio: newDateFormat.hora_inicio, 
            cantidad_comensales: parseInt(dataBookingSaved.cantidad_comensales)
        }

        if(newDateFormat.fecha_inicio && newDateFormat.hora_inicio && dataBookingSaved.cantidad_comensales){
            dispatch(getTables(info))
            setConfirmSearchTables(true)
        };
    };

    const handleEditReservaSubmit = (event) => {
        event.preventDefault();

        const editReserva = {
            fecha_inicio: newDateFormat.fecha_inicio,
            hora_inicio: newDateFormat.hora_inicio,
            cantidad_comensales: parseInt(dataBookingSaved.cantidad_comensales),
            mesa: parseInt(selectedMesaId),
            idUser: userId,
            nota: dataBookingSaved.nota,
        }
        if(newDateFormat.fecha_inicio && 
            newDateFormat.hora_inicio && 
            dataBookingSaved.cantidad_comensales &&
            userId &&
            confirmTable && 
            selectedMesaId) 
        {
            dispatch(putBooking(editReserva, bookingUpdateId))
        };
    }

    return(
    <>
    <form onSubmit={handleTableSubmit} >
        {responseBooking && <span>{responseBooking}</span>}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateTimePicker
            value={new Date(newDateFormat.fecha_inicio + 'T' + newDateFormat.hora_inicio)}
            minDate={today}
            minTime= {day ? minSelectableTime : null}
            onChange={(newDate) => setSelectedDate(newDate)}
            slotProps={{
                toolbar: {
                    toolbarTitle: 'SELECCIONA FECHA Y HORA',
                    toolbarFormat: 'EEEE, dd MMMM',
                }
              }}
            />
        </LocalizationProvider>

        <div>
        <label>Número de personas</label>
            <input 
            type="number"
            name="cantidad_comensales"
            value={dataBookingSaved.cantidad_comensales}
            onChange={event => setDataBookingSaved({...dataBookingSaved, cantidad_comensales: event.target.value})}
            />
        </div>

        {confirmTable && <div>
        <label>Nota</label>
            <textarea 
            type="text"
            name="nota"
            value={dataBookingSaved.nota}
            onChange={event => setDataBookingSaved({...dataBookingSaved, nota:event.target.value})}
            />
        </div>}

        <br/>
        {!confirmTable && <button type="submit">Buscar Mesas Disponibles</button>}
    </form>

    <form onSubmit={handleEditReservaSubmit}>
        {confirmTable && <button type="submit">Confirmar Nueva Reserva</button>}
    </form>
    </>
    )
}

export default EditReservation;