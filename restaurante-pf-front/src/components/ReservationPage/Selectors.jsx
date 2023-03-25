import React, { useEffect, useState } from "react";
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from '../ReservationValidations/FormatConverter';
import { validationDate } from "../ReservationValidations/ValidationDate";
import { getTables } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";

function Selectors(){

    const [selectedDate, setSelectedDate] = useState(new Date());

    const {today, day, minSelectableTime} = validationDate(selectedDate);

    const [newDateFormat, setNewDateFormat] = useState({
        fecha_inicio: '',
        hora_inicio: '',
        cantidad_comensales: '',
    });

    useEffect(() => {
        setNewDateFormat(converter(selectedDate));
      }, [selectedDate]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setNewDateFormat({
            ...newDateFormat,
            [name]: value
        }); 
    };

    const dispatch = useDispatch();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newDateFormat.fecha_inicio && newDateFormat.hora_inicio && newDateFormat.cantidad_comensales){
            dispatch(getTables(newDateFormat))
        };
    };

    return(
    <>
    <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateTimePicker
            value={selectedDate}
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
            value={newDateFormat.cantidad_comensales || ''}
            onChange={event => handleOnChange(event)}
            />
        </div>

        <div>
        <label>Nota</label>
            <textarea 
            type="text"
            name="nota"
            value={newDateFormat.nota || ''}
            onChange={event => handleOnChange(event)}
            />
        </div>

        <br/>

        <button type="submit">Buscar Mesas Disponibles</button>
    </form>
    </>

    )
}

export default Selectors;