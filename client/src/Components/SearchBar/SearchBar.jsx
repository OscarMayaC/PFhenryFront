import React, { useState } from "react";
import { useDispatch } from "react-redux";
import lupa from '../../Pages/Misc/lupa.png'
import { searchDish } from "../../redux/actions/index";
import '../../Pages/Styles/SearchBar.modules.css'

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("")


  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){ dispatch(searchDish(1))} else {
    dispatch(searchDish(name))}
  }

  return (
    <div className="searchbar-contenedor-interno">
      <input
        className="searchbar-delivery-input"
        type="text"
        onChange= {(e) => handleInputChange(e)}
        placeholder="¿Qué te tienta hoy?"
         />
     
      <button className ="button-buscar-lupa" type="submit" onClick= {(e) => handleSubmit(e)}>    <img src={lupa} alt='lupa' className='lupa-searchbar-delivery'></img></button>
    </div>
  );
}
