import React from 'react'
import { useSelector } from 'react-redux'
import '../SASS/Criticas-perfil.modules.css'

const Criticas = () => {

    const myUser = useSelector((state) => state.userData)

    return (
        <div className='criticas-info-main'>

            <div className='criticas-titulos'>
                <p className='p-border'>Críticas</p>
                <p className='p-border-score'>Puntuación</p>
            </div>

            <div className='criticas-scroll'>
            {
                myUser.Critics?.map((c) => {
                    return (
                        <div className='criticas-info' key={c.id}>
                            <p className='p-border-20'>{c.content}</p>
                            <p className='p-border-r'>{c.score}</p>
                        </div>
                    )
                })
            }
            </div>


        </div>
    )
}

export default Criticas