import React from "react";
import Spline from '@splinetool/react-spline';
import Selectors from "./Selectors";

function Reservation(){
    return(
        <div style={{ position: "relative" }}>
      <h1>Reservas</h1>
      <Selectors/>
      <Spline 
        scene="https://prod.spline.design/4g5CF6rNNLqhQuuQ/scene.splinecode"
        style={{ 
          position: "absolute",  
          width: "100%", 
          height: "calc(100% - 80px)"
        }} 
      />
    </div>
    )
}

export default Reservation;