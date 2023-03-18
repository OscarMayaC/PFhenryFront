import './Styles/App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import Landing from '../Components/Landing'
import NavBar from '../Components/NavBar';
import Delivery from '../Components//Delivery';
import Testimonios from '../Components/Testimonios/Testimonios';
import Nosotros from '../Components/SobreNosotros/Nosotros';
import IniciarSesion from '../Components/IniciarSesion/IniciarSesion';
import Register from '../Components/Register/Register';

function App() {

    return (
      
      <div className="App">
    
   
        <Route exact path='/' component={Landing} />
        <Route exact path='/delivery' component={NavBar} />
        <Route exact path='/delivery' component={Delivery} />
        <Route exact path='/reseñas' Component={Testimonios} />
        <Route exact path='/sobrenosotros' Component={Nosotros} />
        <Route exact path='/IniciarSesion' Component={IniciarSesion} />
        <Route exact path='/Register' Component={Register} />
  
      </div>
    );
  }
  
  export default App;
  