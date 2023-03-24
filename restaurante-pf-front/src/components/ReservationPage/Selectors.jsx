import React, { useEffect, useState } from "react";
//import axios from 'axios';
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from '../ReservationValidations/FormatConverter';
import { Box } from "@mui/system";
import { validationDate } from "../ReservationValidations/ValidationDate";

function Selectors(){

    const [selectedDate, setSelectedDate] = useState(new Date());

    const {today, day, minSelectableTime} = validationDate(selectedDate);

    const [newDateFormat, setNewDateFormat] = useState({
        date_start: '',
        time_start: '',
    });

    const [selectors, setSelectors] = useState({
        costumers_quantity:'',
        note: ''
    });

    useEffect(() => {
        setNewDateFormat(converter(selectedDate));
      }, [selectedDate]);

    const handleOnChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setSelectors({
            ...selectors,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newDateFormat.date_start && newDateFormat.time_start && selectors.costumers_quantity){
            //axios.post(http://localhost:3001/)
            console.log(`Date: ${newDateFormat.date_start}, Time: ${newDateFormat.time_start}, Persons: ${selectors.costumers_quantity}, Note: ${selectors.note}`);
        }
    };

    return(
    <>
    <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box>
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
        </Box>
        </LocalizationProvider>

        <div>
        <label>Número de personas</label>
            <input 
            type="number"
            name="costumers_quantity"
            value={selectors.costumers_quantity}
            onChange={event => handleOnChange(event)}
            />
        </div>

        <div>
        <label>Nota</label>
            <textarea 
            type="text"
            name="note"
            value={selectors.note}
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