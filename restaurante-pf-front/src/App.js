import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Testimonios from './components/Testimonios/Testimonios';
import Nosotros from './components/SobreNosotros/Nosotros';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import Register from './components/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <div>  
        <Routes>    

          <Route exact path='/' Component={LandingPage} />
          <Route exact path='/reseñas' Component={Testimonios} />
          <Route exact path='/sobrenosotros' Component={Nosotros} />
          <Route exact path='/IniciarSesion' Component={IniciarSesion} />
          <Route exact path='/Register' Component={Register} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
