import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import Register from './components/Register/Register';



function App() {
  return (
    <BrowserRouter>
      <div>  
        <Routes>    
          <Route exact path='/IniciarSesion' Component={IniciarSesion} />
          <Route exact path='/Register' Component={Register} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
