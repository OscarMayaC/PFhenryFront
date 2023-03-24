import React from 'react';
import './Styles/Delivery.modules.css'
import Cards from '../Components/Cartas/Cards';
import SearchBar from '../Components/SearchBar/SearchBar';
import FullSeccion from '../Components/FullSeccion/FullSeccion';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllDishes, getAllTags, getAllSections} from "../redux/actions/index";
import CartaCarritoCompra from '../Components/Cartas/CartaCarritoCompra';

let carrito = [];


function Delivery() {

    const dispatch = useDispatch();
    const allTags = useSelector((state) => state.allTags)
    const sections = useSelector((state) => state.sections)
    const allSearchDish = useSelector((state) => state.SearchDish)
    const Carrito = useSelector((state) => state.Carrito)
// ESTADOS PARA CARRITO 


// LOCAL STORAGE 

// set item 
const saveLocal=()=>{
localStorage.setItem("carrito",JSON.stringify(carrito));
};
// get item 






    useEffect(() => {
        dispatch(getAllDishes());
        dispatch(getAllTags());
        dispatch(getAllSections());

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
                  <div key={e.id}>
                    <Link to={"/delivery/" + e.id}>
                      <Cards
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        description={e.description}
                        image={e.image}
                        price={e.price}
                        nationality={e.nationality}
                      />
                    </Link>
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
                              {/* ZONA DE DESPLIEGUE PRE COMPRA DE PRODUCTOS */}

            <div className='desplegable-carrito'> 
<h1> soy la lista de compras</h1>
{Carrito?.map((p)=>{
    return(<>
    <CartaCarritoCompra name={p.name} image={p.image} price={p.price}/>
    
    </>)
})}

<Link to={"/carrito"} className="link-carrito-compras"> 
    <button className='boton-carrito-ir-nav'>IR A CARRITO</button>
</Link>



        </div>
        </div>
    );
}



export default Delivery;