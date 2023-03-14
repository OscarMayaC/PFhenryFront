import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <Routes>    
          <Route exact path='/' Component={LandingPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
