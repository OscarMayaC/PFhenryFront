import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import '../SASS/perfil.modules.css'
import { getUsersForProfile } from '../../redux/actions';



const Perfil = () => {

    const myUser = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const {id} = useParams()

    // useEffect(()=> {
    //     console.log(getUsersForProfile(id))
    //     dispatch(getUsersForProfile(id))
    // }, [dispatch])
  
    console.log(myUser)

     return (
        <div className='perfil-bg'>
            <NavBar />
            <h1 className='h1-h1'>Bienvenido a tu perfil!!</h1>
        </div>
     )
}


export default Perfil