import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import NavBar from "../NavBar"
import { getUserByLogin, githubLogin } from '../../redux/actions';
import "../SASS/IniciarSesion.modules.css"
import '../SASS/register.modules.css'
import gitlogo from "../../Pages/Misc/gitlogo.png"
import Swal from "sweetalert2"




const IniciarSesion = () => {
    
    let itsAdmin = useSelector((state) => state.admin)
    let dispatch = useDispatch();
    const history = useHistory();
    

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            if(!password || !email) {
                return  Swal.fire({
                    title: "Cuidado",
                    text: "faltan campos por rellenar",
                    icon: "warning",
                    timer: 2000

                })
            } else {
                console.log("hola")
                dispatch(getUserByLogin(email, password));
                if(itsAdmin) {
                    history.push("/admin")
                } else {
                    history.push("/")
                }
                return Swal.fire({
                    title: "Éxito!!",
                    text: "Éxito al iniciar sesión",
                    icon: "success",
                    timer: 2000
                })

            }

        } catch (error) {
            console.log(error)
        }
      };

    const params = new URL(document.location).searchParams;
    const messageReserva = params.get("messageReserva");

    return (
        <>
         <NavBar />
        <div className='login-bg'>
            {messageReserva && <p className='messageReserva'>{messageReserva}</p>}
            <div className='main-container'>
                <form className='body-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-divs'>
                        <label>Correo: </label>
                            <input className='body-input'
                                type="email"
                                value={email}
                                name= "email"
                                placeholder='Ingrese su correo...'
                                onChange={(e) => setEmail(e.target.value)}
                            />                  
                   
                        <label>Contraseña: </label>
                            <input className='body-input'
                                type="password"
                                value={password}
                                name= "password"
                                placeholder='Ingrese su contraseña...'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <br />
                    <button className='login-btn' type='submit'>Iniciar Sesion</button>

                    <p>- O -</p>

                    <button className='git' onClick={() => {
                        const popup = window.open("https://pfhenryback-production.up.railway.app/login/github",

                            "targetWindow",
                            `
                            toolbar=no,
                            location=no,
                            status=no,
                            menubar=no,
                            scrollbars=yes,
                            resizable=yes,
                            width=620,
                            height=700
                            `
                        );
                    

                        window.addEventListener("message", (e) => {
                            if(e.origin === "https://pfhenryback-production.up.railway.app") {
                                if (e.data) {

                                    console.log(e.data);
                                    localStorage.setItem("user", JSON.stringify(e.data))
                                    localStorage.setItem("userId", JSON.stringify(e.data.usuario.id))
                                    localStorage.setItem("userEmail", JSON.stringify(e.data.usuario.email))
                                    localStorage.setItem("userToken", JSON.stringify(e.data.token))
                                    
                                    dispatch(githubLogin(e.data))

                                  
                                    
                                    popup?.close()
                                    history.push("/")
                                    console.log(e.data)
                                    console.log(e.data.emails)
                                    }
                                    
                                }
                            
                        })
                    }}>Login With GitHub<img src={gitlogo} width="20px" height="20px"/></button>


            </div>          
        </div>
        </>
    )
}

export default IniciarSesion;