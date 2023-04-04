import "./Styles/App.css";
import React from "react";
import { Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import NavBar from "../Components/NavBar";
import Delivery from "../Pages/Delivery";
import Reseñas from "../Components/Reseñas/Reseñas";
import Nosotros from "../Components/SobreNosotros/Nosotros";
import Compras from "../Pages/Compras";
import IniciarSesion from "../Components/IniciarSesion/IniciarSesion";
import Register from "../Components/Register/Register"
import Detalles from "../Components/Detail/details";
import Perfil from "../Components/Perfil/Perfil";
import Reservation from '../Components/ReservationPage/Reservation';
import DashBoardAdmin from "./DashBoardAdmin";
import MisReservas from "../Components/ReservationPage/MisReservas.jsx";
import ReservasAdmin from "../Components/ReservationPage/ReservasAdmin";


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
      <Route exact path="/carrito" component={NavBar} />
      <Route exact path="/carrito" component={Compras} />
      <Route exact path="/detalles/:id" component={Detalles} />
      <Route exact path='/reservation' component={Reservation}/>
      <Route exact path="/admin" component={NavBar} />
      <Route exact path="/admin" component={DashBoardAdmin} />
      <Route exact path="/perfil" component={Perfil} />
      <Route exact path='/reservation' component={Reservation} />
      <Route exact path='/misreservas' component={MisReservas} />
      <Route exact path='/reservasadmin' component={ReservasAdmin} />
    </div>
  );
}

export default App;
