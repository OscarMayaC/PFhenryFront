import React, { Suspense, useEffect, useRef, useState } from "react";
import Selectors from "./Selectors";
import { Canvas, useThree } from "@react-three/fiber";
import Mesas from "./Mesas";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three'
import { useSelector } from "react-redux";
import CardConfirmation from "./CardConfirmation";
import EditReservation from "./EditReservation";


function Reservation(){

  const width = 20;
  const height = 20;
  const canvasRef = useRef();

  const { reserva, infoBooking, responseBooking } = useSelector(state => state)
  console.log(infoBooking)
  
  const [showCardConfirmation, setShowCardConfirmation] = useState(false)

  const [errorMessage, setErrorMessage] = useState('');
  
  const [selectedMesaId, setSelectedMesaId] = useState(null);

  const CanvasComponent = () => {
    const { camera } = useThree();

    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.addEventListener("click", handleCanvasClick);
      return () => {
        canvas.removeEventListener("click", handleCanvasClick);
      };
    }, []);

    const handleCanvasClick = (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
  }};

  const [confirmSearchTables, setConfirmSearchTables] = useState(false)

  const [confirmTable, setConfirmTable] = useState(false)

  const handleConfirmTable = () => {
    setConfirmTable(true)
    setShowCardConfirmation(true)
  };

  return(
    <div>
      <h1>Reservas</h1>
    

      {showCardConfirmation && Object.keys(reserva).length > 0 ? <CardConfirmation reserva={reserva} setShowCardConfirmation={setShowCardConfirmation}/> : (
        
      <div>
      {infoBooking.length > 0 ?
      <EditReservation selectedMesaId={selectedMesaId} confirmTable={confirmTable} setConfirmSearchTables={setConfirmSearchTables}/> : 
      <Selectors selectedMesaId={selectedMesaId} confirmTable={confirmTable} setConfirmSearchTables={setConfirmSearchTables}/>}

      {errorMessage && <span>{errorMessage}</span>}
      {responseBooking && <span>{responseBooking}</span>}
      <Canvas style={{ height: '90%' }} ref={canvasRef}>
        <PerspectiveCamera
        left={-width / 2}
        right={width / 2}
        top={height / 2}
        bottom={-height / 2}
        near={0.1}
        far={100}
        />
        <ambientLight/>
        <pointLight />
        <OrbitControls />
        <Suspense fallback={null} onError={error => console.log(error)}>
          <Mesas scale={[0.025, 0.025, 0.025]} 
          confirmTable={confirmTable} 
          setSelectedMesaId={setSelectedMesaId} 
          selectedMesaId={selectedMesaId}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
          confirmSearchTables={confirmSearchTables}/>
        </Suspense>
      </Canvas>
      {selectedMesaId !== null && !confirmTable ? <button onClick={handleConfirmTable}>Confirmar Mesa</button> : null}
    </div>
    )}
  </div>
  )
}

export default Reservation;