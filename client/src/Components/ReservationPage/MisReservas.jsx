import React from 'react'
import { useEffect } from 'react';
import CardBooking from './CardBooking';
import { useDispatch, useSelector } from 'react-redux';
import { saveBookingsUser } from '../../redux/actions';

export default function MisReservas() {

    const dispatch = useDispatch();


    useEffect(() => {
        //de momento se harcodea el id del usuario en lo que se conoce como se guardara en
        //el local storage.
        fetch(`https://pfhenryback-production.up.railway.app/bookings/8`)
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

    }, []);

    const bookings = useSelector((state) => state.bookingsUser)


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
                        />
                    )
                })
            }

        </div>
    )
}
