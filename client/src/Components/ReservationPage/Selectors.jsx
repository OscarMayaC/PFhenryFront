import React, { useEffect, useState } from "react";
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { converter } from '../ReservationValidations/FormatConverter';
import { validationDate } from "../ReservationValidations/ValidationDate";
import { getTables, postBooking } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import '../css/reservation.css';

function Selectors(props){

    const { selectedMesaId, confirmTable, setConfirmSearchTables } = props

    const history = useHistory();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [selectedDate, setSelectedDate] = useState(new Date());

    const {today, day, minSelectableTime} = validationDate(selectedDate);

    const [newDateFormat, setNewDateFormat] = useState({
        fecha_inicio: '',
        hora_inicio: '',
        cantidad_comensales: 0,
        nota: ''
    });
    
    const dispatch = useDispatch();

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
    
    const handleTableSubmit = (event) => {
        event.preventDefault();
        if(!userId){
            const messageReserva = "Por favor inicie sesión para continuar";
            history.push(`/IniciarSesion?messageReserva=${messageReserva}`)
            return;
        }
    
        const info = {
            fecha_inicio: newDateFormat.fecha_inicio, 
            hora_inicio: newDateFormat.hora_inicio, 
            cantidad_comensales: parseInt(newDateFormat.cantidad_comensales)
        }

        if(newDateFormat.fecha_inicio && newDateFormat.hora_inicio && newDateFormat.cantidad_comensales){
            dispatch(getTables(info))
            setConfirmSearchTables(true)
        };
    };

    const handleReservaSubmit = (event) => {
        event.preventDefault();

        const infoReserva = {
            fecha_inicio: newDateFormat.fecha_inicio,
            hora_inicio: newDateFormat.hora_inicio,
            cantidad_comensales: parseInt(newDateFormat.cantidad_comensales),
            mesa: parseInt(selectedMesaId),
            idUser: userId,
            nota: newDateFormat.nota
        }

        if(newDateFormat.fecha_inicio && 
           newDateFormat.hora_inicio && 
           newDateFormat.cantidad_comensales && 
           userId && 
           confirmTable && 
           selectedMesaId) 
        {
            dispatch(postBooking(infoReserva))
            history.push('/confirmacion')
        };
    };

    return(       
    <>
    <form onSubmit={handleTableSubmit}>

        {!confirmTable && <div>
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
                },
                actionBar: {
                    actions: [],
                },
              }}
            />
        </LocalizationProvider>

        <div className="customers">
        <label className="label-customers">Número de personas</label>
            <input 
            className="input-customers"
            type="number"
            min="1"
            name="cantidad_comensales"
            value={newDateFormat.cantidad_comensales || ''}
            onChange={event => handleOnChange(event)}
            />
        </div>
        </div>}
        

        {confirmTable && <div className="nota">
        <label className="label-nota">Nota</label>
            <textarea 
            className="input-nota"
            type="text"
            name="nota"
            value={newDateFormat.nota || ''}
            onChange={event => handleOnChange(event)}
            />
        </div>}

        <br/>

        {!confirmTable && <button type="submit" className="searchTable">Buscar Mesas Disponibles</button>}
    </form>

    <form onSubmit={handleReservaSubmit}>
        {confirmTable && <button type="submit" className="button-reservacion">Hacer reservación</button>}
    </form>
    </>

    )
}

export default Selectors;