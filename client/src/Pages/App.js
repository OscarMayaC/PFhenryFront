import "./Styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import NavBar from "../Components/NavBar";
import Delivery from "../Pages/Delivery";
import Reseñas from "../Components/Reseñas/Reseñas";
import Nosotros from "../Components/SobreNosotros/Nosotros";
import IniciarSesion from "../components/IniciarSesion/IniciarSesion";
import Register from "../components/Register/Register";
import Detalles from "../Components/Detail/details";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/delivery" component={NavBar} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/reseñas" component={Reseñas} />
      <Route exact path="/sobrenosotros" component={Nosotros} />
      <Route exact path="/IniciarSesion" component={IniciarSesion} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/detalles" component={Detalles} />
    </div>
  );
}

export default App;
