import React from 'react';
import '../../Pages/Styles/FullSeccion.modules.css'
import flechaIzquierda from '../../Pages/Misc/flecha-izquierda.png'
import flechaDerecha from '../../Pages/Misc/flecha-derecha.png'
import flechaAbajo from '../../Pages/Misc/flecha-desplegable.png'
import Cards from '../Cartas/Cards';
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';





export default function FullSeccion({id, description}) {
  // const dispatch = useDispatch();
  
  const allTagsSeccion = useSelector((state) => state.allTags)
  const Entradas = useSelector((state) => state.Entradas)
  let platos=Entradas;
  const PequeñasBotanas = useSelector((state) => state.PequeñaBotana)
  const PlatosPrincipales = useSelector((state) => state.Principales)
  const Acompañamientos = useSelector((state) => state.Acompañamientos)
  const Postres = useSelector((state) => state.Postres)
  const Bebidas = useSelector((state) => state.Bebidas)


  const [selectedOption, setSelectedOption] = useState('Filtro');

// VARIABLE DINAMICA PARA CADA SECCION EN BASE A SU ID 

                                      
if(id===1){platos = Entradas}
else if(id===2){platos = PequeñasBotanas}
else if(id===3){platos = PlatosPrincipales}
else if(id===4){platos = Acompañamientos}
else if(id===5){platos = Postres}
else if(id===6){platos = Bebidas;}

// const allTags = [
//   'Todos',
//   ...new Set(allTagsSeccion.map(tag => tag.description))
// ]


// const [tags, setTags] = useState(allTags)
const [platillos, setPlatillos] = useState(platos)

//  MANEJADOR DE FILTRADO POR TAG DINAMICO 
                    // -------------------------------------  //  FALTA HACER QUE PERSISTA EL ORDENAMIENTO POR SOBRE LOS TAGS o QUE EL CLICKEO EN TAG RESTABLESCA EL INPUT A Ordenar por:
function handleFilterTag(e) {
  let tag = e.target.value
  setSelectedOption('Filtro');
  if(tag === 'Todos'){
    setPlatillos(platos)
    return
  }


const platosFiltrados = platos.filter(objeto => {
  return objeto.tags.some(tags => tags.description === tag);
});
setPlatillos(platosFiltrados)
  }         
                     




  useEffect(() => {
      const miElemento = document.getElementsByClassName("zona-tags");
      const ordenElemento = document.getElementsByClassName("input-orden-section");
      miElemento[5].style.display = "none";
      ordenElemento[5].style.marginLeft = "70%";
  });



   

                            // MANEJADOR SLIDER IZQUIERDO, CON SELECCION GENERAL 

                                    function handleSliderLeft(event) {

                                            const buttonIdSlider = event.target.id;
                                            sliderLeft(buttonIdSlider)
                                                                      }

                                    const sliderLeft=(buttonIdSlider)=>{
                                            var slider = document.getElementsByClassName("zona-tags-del-dia")
                                            slider[buttonIdSlider-1].scrollLeft= -100
                                                                        }
                                  

                            // MANEJADOR SLIDER DERECHO, CON SELECCION GENERAL 
                                  
                                      function handleSliderRight(event) {

                                            const buttonIdSlider = event.target.id;
                                            sliderRight(buttonIdSlider)
                                                                        }

                                      const sliderRight=(buttonIdSlider)=>{
                                            var slider = document.getElementsByClassName("zona-tags-del-dia")
                                            slider[buttonIdSlider-1].scrollLeft= +650
                                                                          }



                            // MANEJADOR ACORDEON DESPLEGABLE GENERAL 
                                    

                                      function handleClick(event) {
                                        setSelectedOption('Filtro');
                                            const buttonId = event.target.id;
                                            mostrarDiv(buttonId)
                                         
                                                                  }

                                          function mostrarDiv(id) {
                                  
                                                var div = document.getElementsByClassName("zona-cartas-platos-seleccionados");
                                                var sectionDiv = document.getElementsByClassName("sections");
                                                var idDesplegable = id - 1;
                                      
                                                    if (div[idDesplegable].style.display === "grid") {
                                                        div[idDesplegable].style.display = "none";
                                                        sectionDiv[idDesplegable].style.height = "80px";
                                                      } else {
                                                        div[idDesplegable].style.display = "grid";
                                                        sectionDiv[idDesplegable].style.height = "100%";
                                                      }
                                                                  }
                                    
                                                                  
 // LLAMADA A LA ACCION ORDENAMIENTOS 
                                        
function onSelectsChange(e) {
  setSelectedOption(e.target.value);
 const orden = e.target.value;



if (!platillos) {
  // Si el estado es undefined, devuelve un array vacío
  setPlatillos([]);
  return;
}

if (orden === 'ASCENDENTE_NOMBRE') {
  setPlatillos([...platillos].sort((a, b) => a.name.localeCompare(b.name)));
} else if (orden === 'DESCENDENTE_NOMBRE') {
  setPlatillos([...platillos].sort((a, b) => b.name.localeCompare(a.name)));
} else if (orden === 'ASCENDENTE_PRECIO') {
  setPlatillos([...platillos].sort((a, b) => b.price - a.price));
} else if (orden === 'DESCENDENTE_PRECIO') {
  setPlatillos([...platillos].sort((a, b) => a.price - b.price));
} else if (orden === 'Filtro') {
  // ARRAY ORIGINAL SIN ORDENACION 
}
};



                               


        return (
            
            <div className='sections' key={id} id={id}>
       
                  <div className='zona-info-section'>      
                  
                          <div className='zona-renderizado-titula-en-barra'>
                              <h1 className='titulo-seccion-carta' >{description}</h1>
                          </div>
                    
                     
         
                          <div className='zona-tags' key={id}>
            
                                      <button onClick={handleSliderLeft} className='boton-flecha-izquierda-scroll-bar-tags' key={id} id={id}>
                                        <img src={flechaIzquierda} className="flecha-izquierda-scroll-tags" id={id} alt='flecha-izquierda-scroll-tags'></img>
                                      </button>
                                
                                
                                                <div className='zona-tags-del-dia'>
  
                                                <div key="7">    
                                          
                                          <button className='boton-seleccion-tags' onClick={handleFilterTag} value="Todos">Todos</button>
                                      
                                        </div>

                                                      {allTagsSeccion?.map((e) => {
                                                     
                                                      return (
                                                        <div key={e.id}>    
                                          
                                                          <button className='boton-seleccion-tags' onClick={handleFilterTag} value={e.description}>{e.description}</button>
                                                      
                                                        </div>
                                                      );
                                                        })}    
                          
                                                </div>

                                      <button onClick={handleSliderRight} className='boton-flecha-derecha-scroll-bar-tags' id={id}>
                                          <img src={flechaDerecha} className="flecha-derecha-scroll-tags" alt='flecha-derecha-scroll-tags' id={id}></img>
                                      </button>
                          
                          </div>   





                          <div className='input-orden-section'>
                                                        <select name="select" value={selectedOption} onChange={onSelectsChange} className="filters-seccion">
                                                                <option value="Filtro"> Ordenar por:</option>
                                                                <option value="ASCENDENTE_NOMBRE">Alfabetico ascendente</option>
                                                                <option value="DESCENDENTE_NOMBRE">Alfabetico descendente</option>
                                                                <option value="ASCENDENTE_PRECIO">Mayor precio</option>
                                                                <option value="DESCENDENTE_PRECIO">Menor precio</option>
                                                        </select>     
                           </div>
                          
                          
                           <div className='zona-boton-desplegar-seccion'>
                                      <button onClick={handleClick} className="filter-buton-seccion" id={id} key={id}><img className="flecha-seccion-abajo" src={flechaAbajo} alt="desplegrar-hacia-abajo" id={id}></img></button>
                           </div>
                  
                  </div>







                  <div className='zona-cartas-platos-seleccionados' id={id}>
                            <div className='renderizado-de-cartas-seccion'>
                                        {platillos?.map((e) => {
                                            return (
                                              <div key={e.id}>
                                               
                                                  <Cards
                                                    key={e.id}
                                                    id={e.id}
                                                    name={e.name}
                                                    description={e.description}
                                                    image={e.image}
                                                    price={e.price}
                                                    nationality={e.nationality}
                                                  />
                                       
                                              </div>
                                            );
                                          })}
                            </div>
                  </div>
            </div>
            );
        };
        
        