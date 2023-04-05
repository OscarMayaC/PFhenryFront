import React from 'react';
import '../../Pages/Styles/PlatosDashBoardAdmin.modules.css'
import CardsAdmin from '../Cartas/CardsAdmin';
import {  getAllSections, getDishEntrada, getDishBotana, getDishPrincipales, getDishAcompañamientos, getDishPostres,  getDishBebidas} from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEdicionPlato from '../Cartas/CardEdicionPlato';
import CardEliminarPlato from '../Cartas/CardEliminarPlato';
import CardCrearPlato from '../Cartas/CardCrearPlato';

function PlatosDashBoardAdmin(props) {
    const dispatch = useDispatch();
 
    const sections = useSelector((state) => state.sections)
    const Entradas = useSelector((state) => state.Entradas)
    const PequeñasBotanas = useSelector((state) => state.PequeñaBotana)
    const PlatosPrincipales = useSelector((state) => state.Principales)
    const Acompañamientos = useSelector((state) => state.Acompañamientos)
    const Postres = useSelector((state) => state.Postres)
    const Bebidas = useSelector((state) => state.Bebidas)
  
    const [platos, setPlatos] = useState(Entradas);

    const handleClick = (e) => {

        let target = e.target.className
 
        if(target==="Entradas"){setPlatos(Entradas);}
        else if(target==="Pequeñas botanas"){setPlatos(PequeñasBotanas);}
        else if(target==="Platos Principales"){setPlatos(PlatosPrincipales);}
        else if(target==="Acompañamientos"){setPlatos(Acompañamientos);}
        else if(target==="Postres"){setPlatos(Postres);}
        else if(target==="Bebidas"){setPlatos(Bebidas);}

    }


    useEffect(() => {

        // dispatch(getAllTags());
        dispatch(getAllSections());
        dispatch(getDishEntrada());
        dispatch(getDishBotana());
        dispatch(getDishPrincipales());
        dispatch(getDishAcompañamientos());
        dispatch(getDishPostres());
        dispatch(getDishBebidas());

      }, [dispatch]);


      const agregarPlato=()=>{
        let ventanaAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado")
        let fondoAgregar = document.getElementsByClassName("dash-board-platos-ventana-agregar-plato-seleccionado-fondo")
        ventanaAgregar[0].style.display="flex"
        fondoAgregar[0].style.display="flex"
        // dispatch(crearPlatoAdmin())
    }


    return (
        <div className="dash-board-platos-component">

                <CardEdicionPlato></CardEdicionPlato>
                <CardEliminarPlato></CardEliminarPlato>
                <CardCrearPlato></CardCrearPlato>

                <div className='dash-board-platos-left-side-panel'>
    
                      <div className='platos-dash-board-admin-button-zone'>
              {
                sections?.map((p) => {

                    return (
                        <button className={p.description} onClick={handleClick} key={p.id}>{p.description} </button>
                
                    )
                })
            } 
            </div>
                </div>
                <div className='dash-board-platos-right-side-panel'>
<div className='dash-board-platos-scroll'>
                {
                platos?.map((p) => {
                    return (
              <CardsAdmin id={p.id} key={p.id} name={p.name} description={p.description} image={p.image} price={p.price} nationality={p.nationality}></CardsAdmin>
                    )
                })
            } 
            <div className='Platos-dash-board-circulo-div-agregar-al-carrito'>
                    <button className='Platos-dash-board-admin-boton-agregar-carrito-en-card' onClick={agregarPlato}>+</button>
            </div>
</div>
                </div>
        </div>
    );
}

export default PlatosDashBoardAdmin;