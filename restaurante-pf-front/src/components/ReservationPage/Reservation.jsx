import React, { Suspense } from "react";
import Selectors from "./Selectors";
import { Canvas } from "@react-three/fiber";
import Restaurant from "./Restaurant";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

function Reservation(){

  const width = 10;
  const height = 10;

  return(
    <div>
      <h1>Reservas</h1>
      <Selectors/>

      <Canvas style={{ height: '90%' }}>
        <OrthographicCamera
        left={-width / 2}
        right={width / 2}
        top={height / 2}
        bottom={-height / 2}
        near={0.1}
        far={100}
        />
        <ambientLight/>
        <OrbitControls />
        <Suspense fallback={null} onError={error => console.log(error)}>
          <Restaurant scale={[0.025, 0.025, 0.025]}/>
        </Suspense>
      </Canvas>
    </div>
    )
}

export default Reservation;