import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import NavBar from "../NavBar"
import { getUserByLogin } from '../../redux/actions';
import "../SASS/IniciarSesion.modules.css"
import '../SASS/register.modules.css'
import gitlogo from "../../Pages/Misc/gitlogo.png"
import Swal from "sweetalert2"



const IniciarSesion = () => {

    const dispatch = useDispatch();
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
                history.push("/")
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


    return (
        <>
         <NavBar />
        <div className='login-bg'>
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

                    

                    <p>
                        <b> ¿Aún no tienes cuenta? <Link to="/register">Registrate</Link> aquí. </b>
                    </p>

                </form>
            </div>          
        </div>
        </>
    )
}

export default IniciarSesion;


{/* <button className='git' onClick={() => {
                        const popup = window.open("http://localhost:3001/login/github",
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
                            if(e.origin === "http://localhost:3001") {
                                if (e.data) {
                                    localStorage.setItem("userGit", JSON.stringify(e.data))

                                    popup?.close()
                                    console.log(e.data)
                                    console.log(e.data.emails)
                                    
                                }
                            }
                        })
                    }}>Login With GitHub<img src={gitlogo} width="20px" height="20px"/></button> */}


                    {/* <div>
                    <div id="g_id_onload"
                        data-client_id="104728938297-vh2a2s2aptlj5vqcqaqb4ri7o25mfnmg.apps.googleusercontent.com"
                        data-login_uri="http://localhost:3001/auth"
                        data-auto_prompt="false">
                    </div>
                    <div className="g_id_signin"
                        data-type="standard"
                        data-size="large"
                        data-theme="outline"
                        data-text="sign_in_with"
                        data-shape="rectangular"
                        data-logo_alignment="left">
                    </div>
                    </div>
                    */}