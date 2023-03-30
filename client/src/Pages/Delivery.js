import React from 'react';
import './Styles/Delivery.modules.css'
import Cards from '../Components/Cartas/Cards';
import SearchBar from '../Components/SearchBar/SearchBar';
import FullSeccion from '../Components/FullSeccion/FullSeccion';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDishes, getAllTags, getAllSections, getDishEntrada, getDishBotana, getDishPrincipales, getDishAcompañamientos, getDishPostres,  getDishBebidas} from "../redux/actions/index";


function Delivery() {

    const dispatch = useDispatch();
    const allTags = useSelector((state) => state.allTags)
    const sections = useSelector((state) => state.sections)
    const allSearchDish = useSelector((state) => state.SearchDish)
 
    useEffect(() => {
        dispatch(getAllDishes());
        dispatch(getAllTags());
        dispatch(getAllSections());
        dispatch(getDishEntrada());
        dispatch(getDishBotana());
        dispatch(getDishPrincipales());
        dispatch(getDishAcompañamientos());
        dispatch(getDishPostres());
        dispatch(getDishBebidas());

      }, [dispatch]);

    return (
        <div className='delivery'>


            <div className='contenedor-delivery-main'>
              <div className='zona-texto-delivery-search'>
                <h1 className='titulo-search-bar'>Delivery</h1>
                   <p className='p-searchbar'>Marcando el rumbo hacia, el buen sabor.</p>
              </div>
                    <div className='zona-opciones-busqueda-seleccion-delivery'>
           
                        <div className='searchbar-zona-delivery'>
                            <SearchBar></SearchBar>
                        </div>
                              <div className='zona-renderizado-de-busqueda'>



{allSearchDish?.map((e) => {
 
                return (
                  <div key={e.id} className="div-card">

             
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


                  <div className='zona-secciones'>
                      {sections?.map((e) => {
                                      return (
                                        <div key={e.id}>
                                          <FullSeccion    
                                              key={e.id}
                                              tags={allTags}
                                              id={e.id}
                                              description={e.description}/>
                                        
                                        </div>
                                      );
                                    })}
 
                  </div> 
        </div>
    );
}



export default Delivery;