import React from 'react';
import '../../Pages/Styles/OfertasDelDiaDashBoardAdmin.modules.css'
// import '../../Pages/Styles/PlatosDashBoardAdmin.modules.css'
import CardsOfertasDelDia from '../Cartas/CardOfertaDelDia';
import CardsOfertasDelDiaSacar from '../Cartas/CardOfertaDelDiaSacar';
import {  getAllSections, getDishEntrada, getDishBotana, getDishPrincipales, getDishAcompañamientos, getDishPostres,  getDishBebidas} from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function OfertasDelDiaDashBoardAdmin(props) {
    const dispatch = useDispatch();
 
    const sections = useSelector((state) => state.sections)
    const Entradas = useSelector((state) => state.Entradas)
    const PequeñasBotanas = useSelector((state) => state.PequeñaBotana)
    const PlatosPrincipales = useSelector((state) => state.Principales)
    const Acompañamientos = useSelector((state) => state.Acompañamientos)
    const Postres = useSelector((state) => state.Postres)
    const Bebidas = useSelector((state) => state.Bebidas)
  
    const [platos, setPlatos] = useState(Entradas);
    const ofertas =PequeñasBotanas
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
      
        dispatch(getAllSections());
        dispatch(getDishEntrada());
        dispatch(getDishBotana());
        dispatch(getDishPrincipales());
        dispatch(getDishAcompañamientos());
        dispatch(getDishPostres());
        dispatch(getDishBebidas());

      }, [dispatch]);



    return (
 
        <div className="dash-board-ofertas-del-dia-component">

<div className='dash-board-ofertas-del-dia-top-side-panel'>
<div className='dash-board-ofertas-del-dia-scroll-top-side-panel'>
                {
                ofertas?.map((p) => {
                    return (
              <CardsOfertasDelDiaSacar id={p.id} name={p.name} description={p.description} image={p.image} price={p.price} nationality={p.nationality}></CardsOfertasDelDiaSacar>
                    )
                })
            } 

</div>
</div>
            <div className='dash-board-ofertas-del-dia-bottom-side-panel'> 
                <div className='dash-board-ofertas-del-dia-left-side-panel'>
    
                      <div className='ofertas-del-dia-dash-board-admin-button-zone'>
              {
                sections?.map((p) => {
                    return (
                        <button className={p.description} onClick={handleClick}>{p.description}</button>
                
                    )
                })
            } 
            </div>
                </div>
                <div className='dash-board-ofertas-del-dia-right-side-panel'>
<div className='dash-board-ofertas-del-dia-scroll'>
                {
                platos?.map((p) => {
                    return (
              <CardsOfertasDelDia id={p.id} name={p.name} description={p.description} image={p.image} price={p.price} nationality={p.nationality}></CardsOfertasDelDia>
                    )
                })
            } 

</div>
                </div>
        </div>
        </div>
    );
}

export default OfertasDelDiaDashBoardAdmin;