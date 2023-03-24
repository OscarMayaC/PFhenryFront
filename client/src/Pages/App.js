import "./Styles/App.css";
import React from "react";
import { Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import NavBar from "../Components/NavBar";
import Delivery from "../Pages/Delivery";
import Testimonios from "../Components/Testimonios/Testimonios.jsx";
import Nosotros from "../Components/SobreNosotros/Nosotros";
import IniciarSesion from "../Components/IniciarSesion/IniciarSesion";
import Register from "../Components/Register/Register";
import Compras from "../Pages/Compras";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/delivery" component={NavBar} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/reseñas" component={Testimonios} />
      <Route exact path="/sobrenosotros" component={Nosotros} />
      <Route exact path="/IniciarSesion" component={IniciarSesion} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/carrito" component={NavBar} />
      <Route exact path="/carrito" component={Compras} />
      
    </div>
  );
}

export default App;
