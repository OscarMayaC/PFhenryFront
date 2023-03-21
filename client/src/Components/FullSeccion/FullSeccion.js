import React from 'react';
import '../../Pages/Styles/FullSeccion.modules.css'
import Cards from '../Cartas/Cards';
// import Tags from '../Tags/Tags';
import { useSelector } from "react-redux";
import flechaIzquierda from '../../Pages/Misc/flecha-izquierda.png'
import flechaDerecha from '../../Pages/Misc/flecha-derecha.png'
import { Sort, filterDishByTag} from '../../redux/actions';
import { useDispatch } from 'react-redux';


// function mostrarDiv() {
//     var div = document.getElementsByClassName("zona-cartas-platos-seleccionados");


//     if (div[0].style.display === "grid") {
//         div[0].style.display = "none";
//       } else {
//         div[0].style.display = "grid";
//       }
//     }

const sliderLeft=()=>{
    var slider = document.getElementsByClassName("zona-tags-del-dia")
    slider[0].scrollLeft= -100
    }


const sliderRight=()=>{
    var slider = document.getElementsByClassName("zona-tags-del-dia")
    slider[0].scrollLeft= +650

    }




    export default function FullSeccion({id, description}) {
        const dispatch = useDispatch();
        const allTagsSeccion = useSelector((state) => state.allTags)
        const allDishesSeccion = useSelector((state) => state.allDishes)


        function handleFilterTag(e) {
          dispatch(filterDishByTag(e.target.value));
        }
        
// getElementsById
        function mostrarDiv() {
            var div = document.getElementsByClassName("zona-cartas-platos-seleccionados");
        
        
            if (div[0].style.display === "grid") {
                div[0].style.display = "none";
              } else {
                div[0].style.display = "grid";
              }
            }
        
        
    function onSelectsChange(e) {
        dispatch(Sort(e.target.value));
      }


        return (
            
            <div className='sections' key={id}>
            
                <div className='zona-info-section'>      
                <h1 className='titulo-seccion-carta' >{description}</h1>
                <div className='tags-zone-en-full-seccion'>
         
                <div className='zona-tags' key={id}>
            
            <button onClick={sliderLeft} className='boton-flecha-izquierda-scroll-bar-tags'><img src={flechaIzquierda} className="flecha-izquierda-scroll-tags" alt='flecha-izquierda-scroll-tags'></img></button>
           
           
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
                <button onClick={sliderRight} className='boton-flecha-derecha-scroll-bar-tags'><img src={flechaDerecha} className="flecha-derecha-scroll-tags" alt='flecha-derecha-scroll-tags'></img></button>
    
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
                <button onClick={mostrarDiv} className="filter-buton-seccion">V</button>
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
<div className='separacion-secciones'></div>
            </div>
            );
        };
        
        