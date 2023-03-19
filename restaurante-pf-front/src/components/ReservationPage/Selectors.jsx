import React, { useEffect, useState } from "react";
//import axios from 'axios';
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from "./FormatConverter";

function Selectors(){

    const [newDateFormat, setNewDateFormat] = useState({
        date_start: '',
        time_start: ''
    });

    const [selectors, setSelectors] = useState({
        date_start: '',
        time_start: '',
        costumers_quantity:'',
        note: ''
    });

    useEffect(() => {
        setNewDateFormat(converter(selectors));
      }, [selectors]);


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
            //axios.post()
            console.log(`Date: ${newDateFormat.date_start}, Time: ${newDateFormat.time_start}, Persons: ${selectors.persons}`);
        }
    }

    const today = new Date();

    return(
    <>
    <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateTimePicker
            onChange={newDate => setSelectors({...selectors, date_start: newDate, time_start: newDate})}
            minDate={today}
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