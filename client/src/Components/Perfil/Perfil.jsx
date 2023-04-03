import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import NavBar from '../NavBar';
import '../SASS/perfil.modules.css'
import { getUsersById } from '../../redux/actions';
import Pedidos from './Pedidos';
import ReservasPerfil from './ReservasPerfil';
import PerfilInfo from './PerfilInfo';
import Criticas from './Criticas';
import { useHistory } from 'react-router';





const Perfil = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    // const { id } = useParams()

    const storedUser = JSON.parse(localStorage.getItem("userId")) //localStorage
    // const storedUserId = storedUser.id


    
    

    useEffect(()=> {            
            dispatch(getUsersById(storedUser))            
    }, [dispatch])


    const handleClick = (e) => {

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


    const handleLogout = (e) => {
        localStorage.removeItem("userId")
        localStorage.removeItem("user")
        localStorage.removeItem("userToken")
        history.push("/iniciarsesion")  
    }

    useEffect(()=> {
        dispatch(getUsersForProfile(id))
        console.log(getUsersForProfile(id))
    }, [dispatch])
  
    console.log(myUser)


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
                    <button className='delivery-perfil' onClick={ handleClick }>Pedidos</button>
                    <button className='bookings-perfil'onClick={ handleClick }>Reservas</button>
                    <button className='critics-perfil'onClick={ handleClick }>Críticas</button>
                    <button className='change-perfil'onClick={ handleClick }>Perfil</button>
                    <button className='logout-perfil' onClick={ (e) => handleLogout(e) }>Cerrar sesión</button>
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
