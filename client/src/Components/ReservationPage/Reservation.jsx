import React, { Suspense, useEffect, useRef, useState } from "react";
import Selectors from "./Selectors";
import { Canvas, useThree } from "@react-three/fiber";
import Mesas from "./Mesas";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three'
import { useSelector } from "react-redux";
import EditReservation from "./EditReservation";
import '../css/reservation.css';
import NavBar from '../NavBar';


function Reservation(){

  const width = 20;
  const height = 20;
  const canvasRef = useRef();
  const scrollRef = useRef();

  const { infoBooking, responseBooking } = useSelector(state => state)

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
  
  useEffect(() => {
    if (confirmSearchTables === true) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [confirmSearchTables]);

  const [confirmTable, setConfirmTable] = useState(false)

  const handleConfirmTable = () => {
    setConfirmTable(true)
  };

  useEffect(() => {
    if (confirmTable === true) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [confirmTable]);

  return(
    <div className="reservas" ref={scrollRef}>
      <NavBar/>
      <h1 className="title">Reservas</h1>
    
      <div> 
      {Object.keys(infoBooking).length > 0 ?
      <EditReservation selectedMesaId={selectedMesaId} confirmTable={confirmTable} setConfirmSearchTables={setConfirmSearchTables}/> : 
      <Selectors selectedMesaId={selectedMesaId} confirmTable={confirmTable} setConfirmSearchTables={setConfirmSearchTables}/>}
      </div>

{!confirmTable &&
      <div className="modelo3d">
      {errorMessage && <span className="error">{errorMessage}</span>}
      {responseBooking && <span className="error1">{responseBooking}</span>}
      <Canvas ref={canvasRef}>
        <PerspectiveCamera
        position={[10, 10, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        fov={60}
        aspect={width / height}
        near={0.1}
        far={150}
        />
        <ambientLight/>
        <directionalLight
        position={[30, 5, 20]} // mueve la luz hacia arriba y atrás
        intensity={2}
        />
        <OrbitControls />
        <Suspense fallback={null} onError={error => console.log(error)}>
          <Mesas scale={[0.025, 0.025, 0.025]}
          position={[-50, 1.5, -50]}
          rotation={[-25, Math.PI/1.98, 0.12]}
          confirmTable={confirmTable} 
          setSelectedMesaId={setSelectedMesaId} 
          selectedMesaId={selectedMesaId}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
          confirmSearchTables={confirmSearchTables}/>
        </Suspense>
      </Canvas>
    </div>}
      {selectedMesaId !== null && !confirmTable && !errorMessage  ? <button onClick={handleConfirmTable} className="confirmationTable">Confirmar Mesa</button> : null} 

  </div>
  )
}

export default Reservation;