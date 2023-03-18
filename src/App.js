import { BrowserRouter, Route, Routes } from "react-router-dom";
import IniciarSesion from "./Components/IniciarSesion/IniciarSesion";
import Register from "./Components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/IniciarSesion" Component={IniciarSesion} />
        <Route exact path="/Register" Component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
