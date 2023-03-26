import React from 'react';
import '../../Pages/Styles/FullSeccion.modules.css'
import Cards from '../Cartas/Cards';
// import Tags from '../Tags/Tags';
import { useSelector } from "react-redux";
import flechaIzquierda from '../../Pages/Misc/flecha-izquierda.png'
import flechaDerecha from '../../Pages/Misc/flecha-derecha.png'
import { Sort, filterDishByTag} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import flechaAbajo from '../../Pages/Misc/flecha-desplegable.png'







    export default function FullSeccion({id, description}) {
        const dispatch = useDispatch();
        const allTagsSeccion = useSelector((state) => state.allTags)
        const allDishesSeccion = useSelector((state) => state.allDishes)


        function handleFilterTag(e) {
          dispatch(filterDishByTag(e.target.value));
        }

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
        dispatch(Sort(e.target.value));
      }





        return (
            
            <div className='sections' key={id} id={id}>
            
                <div className='zona-info-section'>      
                <h1 className='titulo-seccion-carta' >{description}</h1>
                <div className='tags-zone-en-full-seccion'>
         
                <div className='zona-tags' key={id}>
            
            <button onClick={handleSliderLeft} className='boton-flecha-izquierda-scroll-bar-tags' key={id} id={id}><img src={flechaIzquierda} className="flecha-izquierda-scroll-tags" id={id} alt='flecha-izquierda-scroll-tags'></img></button>
           
           
            <div className='zona-tags-del-dia'>
    
    
            <button className='boton-seleccion-tags' onClick={""}>{description}</button>
    
                 {allTagsSeccion?.map((e) => {
                return (
                  <div key={e.id}>
    
                    <button className='boton-seleccion-tags' onClick={handleFilterTag}>{e.description}</button>
                 
                  </div>
                );
              })}    
    
                         </div>
                <button onClick={handleSliderRight} className='boton-flecha-derecha-scroll-bar-tags' id={id}><img src={flechaDerecha} className="flecha-derecha-scroll-tags" alt='flecha-derecha-scroll-tags' id={id}></img></button>
    
                </div>   



                </div>
                <select name="select" onChange={onSelectsChange} className="filters-seccion">
                        <option value="Filtro"> Ordenar por:</option>
                        <option value="ASCENDENTE">Alfabetico ascendente</option>
                        <option value="DESCENDENTE">Alfabetico descendente</option>
                        <option value="VALORACIONMAYOR">Mayor valoracion</option>
                        <option value="VALORACIONMENOR">Menor valoracion</option>
                        <option value="MAYORPRECIO">Mayor precio</option>
                        <option value="MENORPRECIO">Menor precio</option>
                </select>     
                <button onClick={handleClick} className="filter-buton-seccion" id={id} key={id}><img className="flecha-seccion-abajo" src={flechaAbajo} alt="desplegrar-hacia-abajo" id={id}></img></button>
                </div>
              

                <div className='zona-cartas-platos-seleccionados' id={id}>
                <div className='renderizado-de-cartas-seccion'>
            {allDishesSeccion?.map((e) => {
                return (
                  <div key={e.id}>
                    {/* <Link to={"/delivery/" + e.id}> */}
                      <Cards
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        description={e.description}
                        image={e.image}
                        price={e.price}
                        nationality={e.nationality}
                      />
                    {/* </Link> */}
                  </div>
                );
              })}
              </div>
              </div>
            </div>
            );
        };
        
        