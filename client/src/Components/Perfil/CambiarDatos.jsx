import React, { useState,  useEffect } from 'react'
import '../SASS/CambiarDatos.modules.css'
import { ChangeUserInfo, getUsersById} from '../../redux/actions';
import { useDispatch } from 'react-redux';



const CambiarDatos = (props) => {

  const dispatch = useDispatch()

  const userOrigin = JSON.parse(localStorage.getItem("user"))
  console.log(userOrigin)
  
  const storedUser = JSON.parse(localStorage.getItem("userId"))

//   useEffect(()=> {            
//     dispatch(getUsersById(storedUser))            
// }, [dispatch])


  const [input, setInput] = useState({
    name: userOrigin.name,
    email: userOrigin.email,
    phoneNumber:userOrigin.phoneNumber,
    address: userOrigin.Address
})

  function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }


  function cerrarVentana(e){
    e.preventDefault();
    toggleDiv();
}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ChangeUserInfo(storedUser))

  }

  function toggleDiv() {
      let ventanaAgregar = document.getElementsByClassName("cambiar-datos-ventana")
      let fondoAgregar = document.getElementsByClassName("cambiar-datos-fondo-ventana")
      ventanaAgregar[0].style.display="none"
      fondoAgregar[0].style.display="none"
  }

    return (
      <div className='cambiar-datos-fondo-ventana'>
        <div className='cambiar-datos-ventana'>
          <form className='change-datos-form' type="submit" onSubmit={(e) => handleSubmit(e)}>
            <div className='data-change-info'>
            <label>
              Nombre:
              <input className='data-change-input' type="text" value={input.name} name="name" placeholder='Escriba su nuevo nombre...' onChange={handleChange}></input>
            </label>
            </div>

            <div className='data-change-info'>
            <label>
              Email:
              <input className='data-change-input' type="email" value={input.email} name="email" placeholder='Escriba su nuevo email...' onChange={handleChange}></input>
            </label>
            </div>

            <div className='data-change-info'>
            <label>
              Celular:
              <input className='data-change-input' type="text" value={input.phoneNumber} name="phoneNumber" placeholder='Escriba su nuevo celular...' onChange={handleChange}></input>
            </label>
            </div>

            <div className='data-change-info'>
            <label>
              Address:
              <input className='data-change-input' type="text" value={input.address} name="address" placeholder='Escriba su nueva dirección...' onChange={handleChange}></input>
            </label>
            </div>

            <button className='cerrar-ventana' type="submit">Cambiar Datos</button>
            <button className='cerrar-ventana' onClick={cerrarVentana}>Cerrar</button>
          </form>
        </div>
      </div>
    )
}

export default CambiarDatos;


// axios.put("http:localhost:3001/users/:id")