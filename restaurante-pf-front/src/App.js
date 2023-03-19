import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './components/ReservationPage/Reservation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <Routes>    
          <Route exact path='/reservation' Component={Reservation}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
