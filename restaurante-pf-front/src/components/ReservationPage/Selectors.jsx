import React, { useEffect, useState } from "react";
//import axios from 'axios';
import { addMinutes, isToday, addDays } from 'date-fns';
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from "./FormatConverter";

function Selectors(){

    const [newDateFormat, setNewDateFormat] = useState({
        date_start: '',
        time_start: '',
    });

    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate)

    const [selectors, setSelectors] = useState({
        date_start: '',
        time_start: '',
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
    }

    let today = new Date();
    
    const now = new Date();
    const day = isToday(now);
    let  minSelectableTime = addMinutes(now, 60);

    if (now.getHours() >= 23) {
        minSelectableTime = addMinutes(now, 60)
        today = addDays(today, 1);
    }

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
            name="costumers_quantity"
            value={selectors.costumers_quantity}
            onChange={event => handleOnChange(event)}
            />
        </div>

        <div>
        <label>Nota</label>
            <input 
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