import React from 'react';
import '../../Pages/Styles/CardCrearPlato.modules.css'
import { getAllTags, crearPlatoAdmin} from '../../redux/actions';
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";


function CardAgregarPlato(props) {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.allTags);
    const secciones = useSelector((state) => state.sections);
//   console.log(tags)
    const [platos, setPlatos] = useState({
        name: "",
        image: "https://st4.depositphotos.com/6591208/22979/i/450/depositphotos_229793786-stock-photo-empty-ceramic-black-plate-isolated.jpg",
        sectionId:0,
        description:"",
        price:0,
        nationality:"",
        availability:true,
        tags: []
    });
  


    const [tagsTexto, setTagsTexto] = useState({
        tagsTexto:[]
    })

    const [seccionesTexto, setSeccionesTexto] = useState({
        seccionesTexto:[]
    })



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
    
    function handleSelectSection(e) {

        setPlatos({
          ...platos,
          sectionId: e.target.options.selectedIndex,
        //   ACA GUARDA VALOR NUMERICO PARA LA COMPRACION EN BD 
        });
        
        setSeccionesTexto({
            ...seccionesTexto,
           seccionesTexto: [e.target.value]
        })
        }

    function handleSelect(e) {

        setPlatos({
          ...platos,
          tags: [...platos.tags, e.target.options.selectedIndex],
        //   ACA GUARDA VALOR NUMERICO PARA LA COMPRACION EN BD 
        });
        
        setTagsTexto({
            ...tagsTexto,
           tagsTexto: [...tagsTexto.tagsTexto, e.target.value]
        })
        }


        function onInputChange(e) {
            e.preventDefault();
            setPlatos({
              ...platos,
              [e.target.name]: e.target.value,
            });

        
          }


  
  function onSubmit(e) {
    // e.preventDefault();
    dispatch(crearPlatoAdmin(platos));
   toggleDiv()
    alert("Plato creado con exito");
    setPlatos({
        name: "",
        description:"",
        image: "https://st4.depositphotos.com/6591208/22979/i/450/depositphotos_229793786-stock-photo-empty-ceramic-black-plate-isolated.jpg",
        price:0,
        tags: [],
        availability:true,
        nationality:"",
        sectionId:0,
    });

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
                <label htmlFor="name"> Nombre: </label>
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
                   <label htmlFor="description"> Descripción: </label>
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

                  <div className="dash-board-ventana-form-div">
                        <label htmlFor="price">Precio: </label>
                        <input
                        onChange={onInputChange}
                        name="price"
                        type="number"
                        value={platos.price}                    
                        className="dash-board-ventana-input" 
                        placeholder='Precio exacto de tu plato...'
                        />{" "}
                    {/* {errors.life && <p className="error"> {errors.life}</p>} */}
                
                </div>

                <div className="dash-board-ventana-form-div">
                  <label htmlFor="nationality">Nacionalidad: </label>
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
                <div className='options-dash-board-crear-plato'>
                    <div className='dash-board-ventana-form-div-select-tags'>
                            <div className="types-s">
                            <select onChange={handleSelect} className="option-input-form" defaultValue="tagsDelPlato">
                            <option disabled="disabled" value="tagsDelPlato">Tags del plato</option>
                        
                            {tags.map((e) => (
                                <option  value={e.description} key={e.id}>{e.description}</option>
                            ))}{" "}
                            </select>
                                            <ul className='ul-tags-en-plato-nuevo'>
                                            {tagsTexto.tagsTexto?.map((e) => <li className='li-tags-en-plato-nuevo'>{e}</li>)}
                                            </ul>
                            </div>
                    </div>

{/* ---------------------------------------------------------------- */}
                    <div className='dash-board-ventana-form-div-select-section'>

                        <div className='titular-dash-board-creacion-plato'>
                            <h1 className='titulo-dash-board-creacion-plato'>Seccion</h1>
                        </div>
                        <div className='section-selector-dash-board-creacion-plato'>
                            <div className="types-s">
                            <select onChange={handleSelectSection} className="option-input-form" defaultValue="seccionesDelPlato">
                            <option disabled="disabled" value="seccionesDelPlato">Secciones del plato</option>
                        
                            {secciones.map((e) => (
                                <option  value={e.description} key={e.id}>{e.description}</option>
                            ))}{" "}
                            </select>
                                            
                            </div>
                            </div>
                    </div>
                    </div>

                <div className="dash-board-ventana-form-div-botones">
                <button className='dash-board-ventana-button' onClick={cancelarAgregar}>CANCELAR</button>
                <button className='dash-board-ventana-button' type="submit" onClick={onSubmit}>CONFIRMAR</button>
                </div>
            </form>
        </div>
        </div> 
    );
}

export default CardAgregarPlato;