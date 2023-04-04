import React from 'react';
import '../../Pages/Styles/CardCrearPlato.modules.css'
import { getAllTags, crearPlatoAdmin} from '../../redux/actions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {useHistory} from "react-router-dom"

function CardAgregarPlato(props) {
    const dispatch = useDispatch();
    // const history = useHistory();
    const tags = useSelector((state) => state.allTags);
//   console.log(tags)
    // const [errors,setErrors] = useState({
    //   name: "",
    //   tags: [],
    //   image: "https://st4.depositphotos.com/6591208/22979/i/450/depositphotos_229793786-stock-photo-empty-ceramic-black-plate-isolated.jpg",
    //   sectionId:"",
    //   description:"",
    //   price:"",
    //   nationality:"",
    //   availability:"",

    // });
  
    const [platos, setPlatos] = useState({
        name: "",
        tags: [],
        image: "https://st4.depositphotos.com/6591208/22979/i/450/depositphotos_229793786-stock-photo-empty-ceramic-black-plate-isolated.jpg",
        sectionId:"",
        description:"",
        price:"",
        nationality:"",
        availability:"",
    });
  





    function cancelarAgregar(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado")
        let fondoAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado-fondo")
        ventanaAgregar[0].style.display="none"
        fondoAgregar[0].style.display="none"
    }


    function handleSelect(e) {

        setPlatos({
          ...platos,
          tags: [...platos.tags, e.target.value],
        });
        }


        function onInputChange(e) {
            e.preventDefault();
            setPlatos({
              ...platos,
              [e.target.name]: e.target.value,
            });
            // setErrors(
            //   validate({
            //     ...platos,
            //     [e.target.name]: e.target.value,
            //   })
            // );
        
          }


          
  function onSubmit(e) {
    e.preventDefault();
    dispatch(crearPlatoAdmin(platos));
    console.log(platos)
    alert("Plato creado con exito");
    setPlatos({
        name: "",
        tags: [],
        image: "https://st4.depositphotos.com/6591208/22979/i/450/depositphotos_229793786-stock-photo-empty-ceramic-black-plate-isolated.jpg",
        sectionId:"",
        description:"",
        price:"",
        nationality:"",
        availability:"",
    });
    // history.push("/home");
  }



    useEffect(() => {
        dispatch(getAllTags());
      }, [dispatch]);
    
    return (
        <div className='dash-board-platos-ventana-agregar-plato-seleccionado-fondo'>
        <div className='dash-board-platos-ventana-agregar-plato-seleccionado'>
            <form className='dash-board-platos-ventana-agregar-plato-seleccionado-form' onSubmit={onSubmit}>
                
                <div className="dash-board-ventana-form-div-titulo-plato">
                <h1 className='dash-board-ventana-txt-titulo-plato'>CREA TU PLATO!!!</h1>
                </div>


                <div className="dash-board-ventana-form-div">
                {/* <h1 className='dash-board-ventana-txt'>Nombre:</h1> */}
                {/* <input className="dash-board-ventana-input" placeholder="El nombre del nuevo plato..."></input> */}
                <label for="name"> Nombre: </label>
                    <input
                    className="dash-board-ventana-input" 
                    placeholder="El nombre del nuevo plato..."
                    onChange={onInputChange}
                    id="name"
                    name="name"
                    type="text"
                    value={platos.name}
                    required
                    />{" "}
                    {/* {errors.name && <p className="error"> {errors.name}</p>} */}

                </div>
          
                <div className="dash-board-ventana-form-div">

                {/* <h1 className='dash-board-ventana-txt'>Descripción:</h1>
                <input className="dash-board-ventana-input" placeholder="Describe el plato..."></input> */}

                    <label > Descripción: </label>
                            <input
                            onChange={onInputChange}
                            id="description"
                            name="description"
                            type="text"
                            value={platos.description}
                            required
                            className="dash-board-ventana-input" 
                            placeholder="Describe el plato..."

                            />{" "}
                            {/* {errors.name && <p className="error"> {errors.name}</p>} */}

                </div>

                {/* <div className="dash-board-ventana-form-div">
                <h1 className='dash-board-ventana-txt'>Imagen:</h1>
                <input className="dash-board-ventana-input" placeholder="Por defecto la App le asigna una imagen..."></input>
                </div> */}

                <div className="dash-board-ventana-form-div">
                {/* <h1 className='dash-board-ventana-txt'>Precio:</h1>
                <input className="dash-board-ventana-input" placeholder='Precio exacto de tu plato...'></input> */}
                                        <label htmlFor="price">Precio: </label>
                        <input
                        onChange={onInputChange}
                        name="price"
                        type="number"
                        value={platos.price}                    
                        // min={1}
                        // max={100}
                        className="dash-board-ventana-input" 
                        placeholder='Precio exacto de tu plato...'
                        />{" "}
                    {/* {errors.life && <p className="error"> {errors.life}</p>} */}
                
                </div>

                <div className="dash-board-ventana-form-div">
                {/* <h1 className='dash-board-ventana-txt'>Nacionalidad:</h1>
                <input className="dash-board-ventana-input" placeholder='Origen del plato...'></input> */}
                <label for="nationality">Nacionalidad: </label>
                            <input
                            className="dash-board-ventana-input" 
                            placeholder="Origen del plato..."
                            onChange={onInputChange}
                            id="nationality"
                            name="nationality"
                            type="text"
                            value={platos.nationality}
                            required
                            />{" "}
                            {/* {errors.name && <p className="error"> {errors.name}</p>} */}

                </div>

                            <p className="types-s">
                            <select onChange={handleSelect} className="option-input-form">
                            <option selected="true" disabled="disabled">Tags del plato</option>
                        
                            {tags.map((e) => (
                                <option  value={e.description}>{e.description}</option>
                            ))}{" "}
                            </select>
                                            <ul className='ul-tags-en-plato-nuevo'>
                                            {platos.tags.map((e) => <li className='li-tags-en-plato-nuevo'>{e}</li>)}
                                            </ul>
                            </p>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarAgregar}>CANCELAR</button>
                <button className='dash-board-ventana-button' type="submit">CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardAgregarPlato;