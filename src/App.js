import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Reservation from './components/ReservationPage/Reservation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">  
          <Route exact path='/reservation' component={Reservation}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
