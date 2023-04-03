import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CardBooking from './CardBooking';
import { saveAllBookingsAdmin, filterBookingsInThisDate, refreshAdminBookings } from '../../redux/actions';
import { useState } from 'react';


export default function () {
    const dispatch = useDispatch();

    const [datesWithBookings, setDatesWithBookings] = useState();

    useEffect(() => {
        fetch(`https://pfhenryback-production.up.railway.app/bookings/admin/`)
            .then((response) => response.json())
            .then((bookings) => {
                if (bookings) {
                    dispatch(saveAllBookingsAdmin(bookings));
                } else {
                    console.log(bookings);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        fetch(`https://pfhenryback-production.up.railway.app/bookings/admin/dates`)
            .then((response) => response.json())
            .then((dates) => {
                if (dates) {
                    setDatesWithBookings(dates);
                } else {
                    console.log(dates);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, []);

    function aplicateFilters(event) {
        event.preventDefault();
        const { value } = event.target;
        if (value === "all") {
            return dispatch(refreshAdminBookings());
        } else {
            return dispatch(filterBookingsInThisDate(value));
        }
    }

    const bookings = useSelector((state) => state.allBookingsAdmin)


    return (
        <div>
            <select name='dates' defaultValue={"Default"} onChange={aplicateFilters} >
                <option value="Default" disabled>Fechas con reservas</option>
                <option value="all" key="all">Todas las reservas</option>
                {
                    datesWithBookings?.map((date) => {
                        return (<option value={date} key={date}>{date}</option>)
                    })
                }
            </select>
            {
                bookings?.map((booking) => {
                    return (
                        <CardBooking
                            idBooking={booking.id}
                            key={booking.id}
                            date_start={booking.date_start}
                            time_start={booking.time_start}
                            date_end={booking.date_end}
                            time_end={booking.time_end}
                            costumers_quantity={booking.costumers_quantity}
                            tableId={booking.tableId}
                        />
                    )
                })
            }

        </div>
    )
}
