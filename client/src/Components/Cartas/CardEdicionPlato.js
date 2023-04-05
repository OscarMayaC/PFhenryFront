import React from 'react';
import '../../Pages/Styles/CardEdicionPlato.modules.css'
import { editarPlatoAdmin } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllTags } from '../../redux/actions';


function CardEdicionPlato(props) {
    const dispatch = useDispatch();
    const dishData = useSelector((state) => state.dataForEditDish);
    const dish = useSelector((state) => state.idDish);
     const tags = useSelector((state) => state.allTags);
    const secciones = useSelector((state) => state.sections);

const [plato, setPlato] = useState({
        id:dish,
        name: dishData.name,
        image: dishData.image,
        sectionId:0,
        description:dishData.description,
        price:dishData.price,
        nationality:dishData.nationality,
        availability:true,
        tags: []
    });
   

    const [tagsTexto, setTagsTexto] = useState({
        tagsTexto:[]
    })

    const [seccionTexto, setSeccionTexto] = useState({
        seccionTexto:[]
    })






    function cancelarEditar(e){
        e.preventDefault();
        toggleDiv();
    }
    
    function toggleDiv() {
        let ventanaEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado")
        let fondoEdicion = document.getElementsByClassName("dash-board-platos-ventana-edicion-plato-seleccionado-fondo")
        ventanaEdicion[0].style.display="none"
        fondoEdicion[0].style.display="none"
 
    }


    function handleSelectSection(e) {

        setPlato({
          ...plato,
          sectionId: e.target.options.selectedIndex,
        //   ACA GUARDA VALOR NUMERICO PARA LA COMPRACION EN BD 
        });
        
        setSeccionTexto({
            ...seccionTexto,
           seccionTexto: [e.target.value]
        })
        }


        function handleSelect(e) {

            setPlato({
              ...plato,
              tags: [...plato.tags, e.target.options.selectedIndex],
            //   ACA GUARDA VALOR NUMERICO PARA LA COMPRACION EN BD 
            });
            
            setTagsTexto({
                ...tagsTexto,
               tagsTexto: [...tagsTexto.tagsTexto, e.target.value]
            })
            }
    


            function onInputChange(e) {
                e.preventDefault();
                setPlato({
                  ...plato,
                  [e.target.name]: e.target.value,
                });            
              }


              function onEdit(e) {
                dispatch(editarPlatoAdmin(plato));
                console.log(plato.id)
               toggleDiv()
                alert("Plato editado con exito");
                setPlato({
                    id:0,
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
                <div className='dash-board-platos-ventana-edicion-plato-seleccionado-fondo'>
                <div className='dash-board-platos-ventana-edicion-plato-seleccionado'>
                    <form className='dash-board-platos-ventana-edicion-plato-seleccionado-form' onSubmit={onEdit}>
                        
                        <div className="dash-board-ventana-form-div-titulo-plato">
                        <h1 className='dash-board-ventana-txt-titulo-plato'>EDICIÓN DE PLATO</h1>
                        {/* <p>{dishData.name}</p> */}
               
                        </div>
        
        
                        <div className="dash-board-ventana-form-div">
                        <label htmlFor="name"> Nombre: </label>
                            <input
                            className="dash-board-ventana-input" 
                            placeholder={dishData.name}
                            onChange={onInputChange}
                            id="name"
                            name="name"
                            type="text"
                            value={plato.name}
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
                                    value={plato.description}
                                    required
                                    className="dash-board-ventana-input" 
                                    placeholder={dishData.description}
        
                                    />{" "}
                                    {/* {errors.name && <p className="error"> {errors.name}</p>} */}
        
                        </div>
        
                          <div className="dash-board-ventana-form-div">
                                <label htmlFor="price">Precio: </label>
                                <input
                                onChange={onInputChange}
                                name="price"
                                type="number"
                                value={plato.price}                    
                                className="dash-board-ventana-input" 
                                placeholder={dishData.price}
                                />{" "}
                            {/* {errors.life && <p className="error"> {errors.life}</p>} */}
                        
                        </div>
        
                        <div className="dash-board-ventana-form-div">
                          <label htmlFor="nationality">Nacionalidad: </label>
                                    <input
                                    className="dash-board-ventana-input" 
                                    placeholder={dishData.nationality}
                                    onChange={onInputChange}
                                    id="nationality"
                                    name="nationality"
                                    type="text"
                                    value={plato.nationality}
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
                        <button className='dash-board-ventana-button' onClick={cancelarEditar}>CANCELAR</button>
                        <button className='dash-board-ventana-button' type="submit" onClick={onEdit}>CONFIRMAR</button>
                        </div>
                    </form>
                </div>
                </div> 
            );
        }

export default CardEdicionPlato;