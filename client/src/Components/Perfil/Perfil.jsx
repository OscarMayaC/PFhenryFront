import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import '../SASS/perfil.modules.css'
import { getUsersById } from '../../redux/actions';
import Pedidos from './Pedidos';
import ReservasPerfil from './ReservasPerfil';
import PerfilInfo from './PerfilInfo';
import Criticas from './Criticas';
import { getAllDishes } from '../../redux/actions';





const Perfil = () => {
    // const user = localStorage.getItem("user")
    const myUser = useSelector((state) => state.userData)
    const myId = useSelector((state) => state.userId)
    const myState = useSelector((state) => state)
    // console.log(myState)



    const dispatch = useDispatch();
    // const { id } = useParams()

    const storedUser = JSON.parse(localStorage.getItem("userId")) //localStorage
    // const storedUserId = storedUser.id


    
    

    useEffect(()=> {
            
            dispatch(getUsersById(storedUser))
            // if(storedUser) {
            //     const idEl = document.getElementById('id');
            //     const fechaEl = document.getElementById('date_start');
            //     const horaEl = document.getElementById('time_start');
            //     const horalleEl = document.getElementById('date_delivery');
            //     const precioEl = document.getElementById('total_price');
            //     const descEl = document.getElementById('description');
            //     const userEl = document.getElementById('UserId');
            //     idEl.textContent = storedUser.id;
            //     fechaEl.textContent = storedUser.date_start;
            //     horaEl.textContent = storedUser.time_start;
            //     horalleEl.textContent = storedUser.date_delivery;
            //     precioEl.textContent = storedUser.total_price;
            //     descEl.textContent = storedUser.description;
            //     userEl.textContent = storedUser.UserId;
            // }
            
    }, [dispatch])

    console.log(myUser)
    console.log(myUser.Orders)

    // console.log(myState)
    // console.log(myUser)
    // console.log(myId)

    const handleClick = (e) => {

        console.info(myId)

        let target = e.target.className
        // console.log(target)

        let pedidosDivMayor = document.getElementsByClassName("pedidos")
        let pedidosDiv = document.getElementsByClassName("pedidos-info-main")
        let reservasDiv = document.getElementsByClassName("reservas-info-main-perfil")
        let criticasDiv = document.getElementsByClassName("criticas-info-main")
        let perfilDiv = document.getElementsByClassName("perfil-info-main")


        if(target === "delivery-perfil") {
            perfilDiv[0].style.display = "none"
            criticasDiv[0].style.display = "none"
            reservasDiv[0].style.display = "none"
            pedidosDiv[0].style.display = "flex"
            pedidosDivMayor[0].style.display = "flex"
        }

        if(target === "bookings-perfil") {
            perfilDiv[0].style.display = "none"
            criticasDiv[0].style.display = "none"
            reservasDiv[0].style.display = "flex"
            pedidosDiv[0].style.display = "none"
            pedidosDivMayor[0].style.display = "none"
        }

        if(target === "critics-perfil") {
            perfilDiv[0].style.display = "none"
            criticasDiv[0].style.display = "flex"
            reservasDiv[0].style.display = "none"
            pedidosDiv[0].style.display = "none"
            pedidosDivMayor[0].style.display = "none"
        }

        if(target === "change-perfil") {
            perfilDiv[0].style.display = "flex"
            criticasDiv[0].style.display = "none"
            reservasDiv[0].style.display = "none"
            pedidosDiv[0].style.display = "none"
            pedidosDivMayor[0].style.display = "none"
        }
        
    }

     return (
        <div className='perfil-bg'>
            <NavBar />
                <h1 className='h1-h1'>Bienvenido a tu perfil!!</h1>
            <div className='detail-perfil'>
                <div className='left-side-perfil'>
                    <div>
                        <img></img>
                        <h1 className='float-user'></h1>
                    </div>
                    <h2>Información</h2>
                    <button className='delivery-perfil' onClick={ handleClick}>Pedidos</button>
                    <button className='bookings-perfil'onClick={ handleClick}>Reservas</button>
                    <button className='critics-perfil'onClick={ handleClick}>Críticas</button>
                    <button className='change-perfil'onClick={ handleClick}>Perfil</button>
                    <button className='logout-perfil' onClick={ handleClick}>Cerrar sesión</button>
                </div>
                <div className='right-side-perfil'>

                    <div className='perfil-info-detail'>
                        <PerfilInfo />
                    </div>

                    <div className='pedidos'>
                        <Pedidos
                            
                        />
                    </div>

                    <div className='reservas-info-main-perfil'>
                        <ReservasPerfil
                            
                        />
                    </div>

                    <div className='criticas-info-main-perfil'>
                        <Criticas />
                    </div>

                </div>
            </div>
        </div>
     )
}



export default Perfil



{/* <aside>
<img src={User} alt="user img" height="50px" width="70px" ></img>
<h2>Name: {myUser.name}</h2>
<h3>Email: myEmail </h3>
<h3>Celular: myPhone</h3>
</aside>

<div>

</div>

<div className='delivery-profile'>
<p><b>Delivery</b></p>
<div>
    <p>ID: <span id='id'></span></p>
    <p>Fecha: <span id='date_start'></span></p>
    <p>Hora del pedido: <span id='time_start'></span></p>
    <p>Hora de llegada: <span id='date_delivery'></span></p>
    <p>Precio: <span id='total_price'></span></p>
    <p>Descripción: <span id='description'></span></p>
    <p>Usuario del pedido: <span id='UserId'></span></p>
</div>
</div>

<div className='reservas-profile'>
<p><b>Reservas</b></p>

</div> */}