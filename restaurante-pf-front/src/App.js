import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Testimonios from './components/Testimonios/Testimonios';
import Nosotros from './components/SobreNosotros/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <Routes>    
          <Route exact path='/' Component={LandingPage} />
          <Route exact path='/reseñas' Component={Testimonios} />
          <Route exact path='/sobrenosotros' Component={Nosotros} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
