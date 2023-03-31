import React from 'react';
import logo from '../../imgs/logo.png';
import '../css/NavBar.modules.css';
import '../css/nosotros.css';
import NavBar from '../NavBar/NavBar';




const Nosotros = () => {
     


    return (
        <div className=''>
            <div><NavBar/></div>

            <div className='base'>

             <div className='info'>

             <div className='detail'>

            <h1 className='rosa'>Rosa del Viento</h1>
            <img src={logo} alt="Imagen no encontrada." className='logosss'/>
            <p>Nosotros no cocinamos para gente exclusiva, nosotros cocinamos para tí.</p><br/>
            <p>No nos importa tu color de piel, ni raza, ni religion, ni preferencias sexuales.</p><br/>
            <p>A nosotros solo nos importa tu hambre, tu satisfacción y tu antojo.</p><br/>
            <p>Fundada en 1977, se creó el primer menu con pasion y muchos sueños.</p><br/>
            <p>Con lealtad y la honestidad. Vamos a crecer y creceremos con sabor. </p><br/>
            <p> Desde nuestras tres gastronomias extenderemos algo mas que un negocio.</p><br/>
            <p>Extenderemos un progreso multicultural pero sobre todo un servicio eficaz.</p>

            </div>

            </div>


            </div>

        </div>

    )
}

export default Nosotros;