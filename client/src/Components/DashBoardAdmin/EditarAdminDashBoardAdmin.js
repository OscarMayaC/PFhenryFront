import React from 'react'
import '../../Pages/Styles/EditarAdminDashBoardAdmin.modules.css'
import user from "../../Pages/Misc/user.png"
import CardEdicionInfoAdmin from '../Cartas/CardEdicionInfoAdmin'
// import { useSelector } from 'react-redux'



const EditarAdminDashBoardAdmin = () => {
    const admin = JSON.parse(localStorage.getItem("user"));

    // const myUser = useSelector((state) => state.userData)

    const editarInfoAdmin = (e) => {
        let ventanaEdicion = document.getElementsByClassName("dash-board-info-admin-ventana-edicion-admin-seleccionado-fondo")
        let fondoEdicion = document.getElementsByClassName("dash-board-info-admin-ventana-edicion-admin-seleccionado")
        ventanaEdicion[0].style.display = "flex"
        fondoEdicion[0].style.display = "flex"
    }
    



    return (
        <div className="dash-board-editar-admin-component">
            <CardEdicionInfoAdmin></CardEdicionInfoAdmin>
            <div className='btn-info-admin'>
                <img src={user} alt='imagen sin colocar' width="70px" height="50px"></img>
                {/* <button className="btn-info-edit-admin-data" onClick={editarInfoAdmin}>...</button> */}
            </div>

            <div className='btn-info-admin'>
                {/* <h1>{myUser.name}</h1> */}
                <h1 className="info-admin-txt">Admin user</h1>
                {/* <button className="btn-info-edit-admin-data" onClick={editarInfoAdmin}>...</button> */}
            </div>

            {/* <div className='btn-info-admin'>
                <h1 className="info-admin-txt">********d4t</h1>
                // <button className="btn-info-edit-admin-data" onClick={editarInfoAdmin}>...</button>
            </div> */}

            <div className='btn-info-admin'>
                {/* <h3>{myUser.email}</h3> */}
                <h1 className="info-admin-txt">{admin.email}</h1>
                {/* <button className="btn-info-edit-admin-data" onClick={editarInfoAdmin}>...</button> */}
            </div>

            <div className='btn-info-admin'>
                {/* <h4>{myUser.phoneNumber}</h4> */}
                <h1 className="info-admin-txt">{admin.phoneNumber}</h1>
                {/* <button className="btn-info-edit-admin-data" onClick={editarInfoAdmin}>...</button> */}
            </div>

            <div className='btn-info-admin'>
                {/* <p>{myUser.Addresses}</p> */}
                <h1 className="info-admin-txt">Calle tradicion 120</h1>
                <div className='btn-direcciones-info-admin'>
                    <button className='btn-info-edit-admin-data' onClick={editarInfoAdmin}>...</button>
                </div>
            </div>

        </div>
    )
}

export default EditarAdminDashBoardAdmin;