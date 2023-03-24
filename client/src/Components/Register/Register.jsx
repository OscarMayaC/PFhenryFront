import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { postUsers } from '../../redux/actions'
import { useHistory } from 'react-router-dom';
import '../SASS/register.modules.css'



const Register = () => {

    const disptach = useDispatch()
    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        password: "",
        email: "",
        phoneNumber:"",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        try {
            if(!input.name || !input.password || !input.email || !input.phoneNumber) {
                return alert("Te faltan campos por rellenar!")
            }
            disptach(postUsers(input));
            alert("User created")
            setInput({
                name: "",
                password: "",
                email: "",
                phoneNumber:"",
            })
            history.push("/iniciarsesion")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="register-bg">
            <NavBar />

            <div className='main-form-register'>
                <form className='body-register-form' onSubmit={(e)=> handleSubmit(e)}>
                    <div className='form-divs'>
                        <label>Nombre: </label>
                            <input className='body-input'
                                type="text"
                                value={input.correo}
                                name="name"
                                placeholder='Escriba su nombre...'
                                onChange={handleChange}
                            />

                        <label>Password: </label>
                            <input className='body-input'
                                type="password"
                                value={input.contraseña}
                                name="password"
                                placeholder='Escriba su contraseña...'
                                onChange={handleChange}
                            />

                        <label>Email: </label>
                            <input className='body-input'
                                type="email"
                                value={input.email}
                                name="email"
                                placeholder='Escriba su correo...'
                                onChange={handleChange}
                            />

                        <label>Celular: </label>
                            <input className='body-input'
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                placeholder='Escriba su celular...'
                                onChange={handleChange}
                            />
                        <br />
                            <button className='register-btn' type='submit'>Registrarse!</button>
                        <br />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;