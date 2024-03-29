import React from 'react'
import { useEffect, useState } from 'react';
import CardBooking from './CardBooking';
import { useDispatch, useSelector } from 'react-redux';
import { saveBookingsUser, refreshUserBookings, filterBookingsInThisDate } from '../../redux/actions';

export default function MisReservas() {

    const dispatch = useDispatch();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [datesWithBookings, setDatesWithBookings] = useState();

    useEffect(() => {
        fetch(`https://pfhenryback-production.up.railway.app/bookings/${userId}`)
            .then((response) => response.json())
            .then((bookings) => {
                if (bookings) {
                    dispatch(saveBookingsUser(bookings));
                } else {
                    console.log(bookings);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
      

        fetch(`https://pfhenryback-production.up.railway.app/bookings/dates/${userId}`)
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
            return dispatch(refreshUserBookings(userId));
        } else {
            return dispatch(filterBookingsInThisDate(value, userId));
        }
    }

    const bookings = useSelector((state) => state.bookingsUser)


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
