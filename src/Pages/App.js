import './Styles/App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import Landing from './Landing'
import NavBar from '../Components/NavBar';
import Delivery from './Delivery';
import Testimonios from '../Components/Testimonios/Testimonios';
import Nosotros from '../Components/SobreNosotros/Nosotros';

function App() {

    return (
      
      <div className="App">
    
   
      <Route exact path='/' component={Landing} />
      <Route exact path='/delivery' component={NavBar} />
      <Route exact path='/delivery' component={Delivery} />
      <Route exact path='/reseñas' Component={Testimonios} />
      <Route exact path='/sobrenosotros' Component={Nosotros} />
    
  
      </div>
    );
  }
  
  export default App;
  