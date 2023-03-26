import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import { getUserByLogin } from '../../redux/actions';
import "../SASS/IniciarSesion.modules.css"
import '../SASS/register.modules.css'



const IniciarSesion = () => {

    const dispatch = useDispatch();
    // const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const [input, setInput] = useState({
    //     email: "",
    //     password: "",
    // })

    // function handleChange(e) {
    //     setEmail({
    //         ...email,
    //         [e.target.name]: e.target.value
    //     })
    //     setPassword({
    //         ...password,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(getUserByLogin(email, password))
    //     console.log(getUserByLogin())
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUserByLogin(email, password));
      };

    return (
        <div className='login-bg'>
            <NavBar />
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
                    <br />
                    <p>
                        <b> ¿Aún no tienes cuenta? <Link to="/register">Registrate</Link> aquí. </b>
                    </p>
                </form>
            </div>          
        </div>
    )
}

export default IniciarSesion;