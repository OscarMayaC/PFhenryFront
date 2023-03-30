import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CardBooking from './CardBooking';
import { saveAllBookingsAdmin } from '../../redux/actions';


export default function () {
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`https://pfhenryback-production.up.railway.app/bookings`)
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

    }, []);

    const bookings = useSelector((state) => state.allBookingsAdmin)


    return (
        <div>
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
