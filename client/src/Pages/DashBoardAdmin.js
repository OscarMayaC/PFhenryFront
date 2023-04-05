import React from 'react';
import './Styles/DashBoard.modules.css'
import user from './Misc/user.png'
import Pedidos from '../Components/DashBoardAdmin/PedidosDashBoardAdmin'
import Reservas from '../Components/DashBoardAdmin/ReservasDashBoardAdmin'
import Platos from '../Components/DashBoardAdmin/PlatosDashBoardAdmin'
import Secciones from '../Components/DashBoardAdmin/SeccionesDashBoardAdmin'
import Tags from '../Components/DashBoardAdmin/TagsDashBoardAdmin'
import OfertasDelDia from '../Components/DashBoardAdmin/OfertasDelDiaDashBoardAdmin'
import EditarAdmin from '../Components/DashBoardAdmin/EditarAdminDashBoardAdmin'
import { useHistory } from 'react-router';








function DashBoardAdmin() {

    const history = useHistory();

    const handleLogout = (e) => {
        localStorage.removeItem("userId")
        localStorage.removeItem("user")
        localStorage.removeItem("userToken")
        history.push("/iniciarsesion")
        window.location.replace('/iniciarsesion');
    }
    const handleClick = (e) => {

        let target = e.target.className

        let pedidosDashBoardAdminBtn = document.getElementsByClassName("dash-board-pedidos-component")
        let reservasDashBoardAdminBtn = document.getElementsByClassName("dash-board-reservas-component")
        let platosDashBoardAdminBtn = document.getElementsByClassName("dash-board-platos-component")
        let seccionesDashBoardAdminBtn = document.getElementsByClassName("dash-board-secciones-component")
        let tagsDashBoardAdminBtn = document.getElementsByClassName("dash-board-tags-component")
        let ofertasDelDiaDashBoardAdminBtn = document.getElementsByClassName("dash-board-ofertas-del-dia-component")
        let editarAdminDashBoardAdminBtn = document.getElementsByClassName("dash-board-editar-admin-component")
        let platosEntradasBtn = document.getElementsByClassName('Entradas');
        let ofertasDelDiaBtn = document.getElementsByClassName('Entradas');

        function handlePlatos() {
            platosEntradasBtn[0].click()
        }
        function handleOfertasDelDia() {
            ofertasDelDiaBtn[1].click()
        }

        if (target === "dash-board-admin-button-pedidos") {
            pedidosDashBoardAdminBtn[0].style.display = "flex"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "none"


        }

        if (target === "dash-board-admin-button-reservas") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "flex"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "none"
        }

        if (target === "dash-board-admin-button-platos") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "flex"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "none"
            handlePlatos();
        }

        if (target === "dash-board-admin-button-secciones") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "flex"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "none"
        }

        if (target === "dash-board-admin-button-tags") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "flex"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "none"
        }

        if (target === "dash-board-admin-button-ofertas-del-dia") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "flex"
            editarAdminDashBoardAdminBtn[0].style.display = "none"
            handleOfertasDelDia()
        }

        if (target === "dash-board-admin-button-editar-admin") {
            pedidosDashBoardAdminBtn[0].style.display = "none"
            reservasDashBoardAdminBtn[0].style.display = "none"
            platosDashBoardAdminBtn[0].style.display = "none"
            seccionesDashBoardAdminBtn[0].style.display = "none"
            tagsDashBoardAdminBtn[0].style.display = "none"
            ofertasDelDiaDashBoardAdminBtn[0].style.display = "none"
            editarAdminDashBoardAdminBtn[0].style.display = "flex"
        }


    }










    return (
        <div className='dash-board-admin-main-component'>

            <div className='dash-board-admin-inner-main'>

                <div className='dash-board-admin-inner-left'>

                    <div className='dash-board-admin-minimum-profile-data'>
                        <img src={user} alt='img-de-usuario' className='dash-board-admin-img-user-admin'></img>
                        <h1 className='dash-board-admin-name-user-admin'>Admin User</h1>
                    </div>

                    <div className='dash-board-admin-button-zone'>
                        <button className='dash-board-admin-button-pedidos' onClick={handleClick}>Pedidos</button>
                        <button className='dash-board-admin-button-reservas' onClick={handleClick}>Reservas</button>
                        <button className='dash-board-admin-button-platos' onClick={handleClick}>Platos</button>
                        {/* <button className='dash-board-admin-button-secciones' onClick={handleClick}>Secciones</button> */}
                        <button className='dash-board-admin-button-tags' onClick={handleClick}>Tags</button>
                        <button className='dash-board-admin-button-ofertas-del-dia' onClick={handleClick}>Ofertas del día</button>
                        <button className='dash-board-admin-button-editar-admin' onClick={handleClick}>Editar admin</button>
                        <button className='dash-board-admin-button-cerrar-sesion' onClick={(e) => handleLogout(e)}>Cerrar sesión</button>
                    </div>
                </div>


                <div className='dash-board-admin-inner-right'>

                    <div className="dash-board-admin-component">
                        <Pedidos></Pedidos>

                        <Reservas></Reservas>

                        <Platos></Platos>

                        <Secciones></Secciones>

                        <Tags></Tags>

                        <OfertasDelDia></OfertasDelDia>

                        <EditarAdmin></EditarAdmin>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default DashBoardAdmin;