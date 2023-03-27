import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import NavBar from "../../Components/NavBar";
import "../css/details.css";
import CardDetail from "./cardDetail";
import CardReseñas from "../Reseñas/CardReseñas";
import testimonios from "../Reseñas/testimonios";
import logo from '../../imgs/logo.png';
import { getDetail, postCritic } from "../../redux/actions";

//funcion que devuelve los mensajes de error del formulario
function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = 'Es necesario un titulo';
    }
    else if (input.title.length > 20) {
        errors.title = 'El titulo es demasiado largo.';
    }
    if (!input.content) {
        errors.content = 'Es necesario una descripcion.';
    }
    else if (!input.score) {
        errors.score = 'El puntaje es obligatorio.';
    }
    else if (isNaN(parseInt(input.score))) {
        errors.score = 'El puntaje debe ser un número.';
    }
    else if (input.score <= 0) {
        errors.score = 'El puntaje no puede ser menor de 0';
    }
    else if (input.score > 10) {
        errors.score = 'El puntaje no puede ser mayor a 10';
    }
    return errors;
}


const Detalles = (props) => {
    
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});
    
    let reseñas = testimonios();//aqui extraigo los testimonios por defecto
    let tags=["tagComida1", "tagcomida2", "tagcomida3"];
    
    const [input, setInput] = useState({
                title: '',
                content: '',
                score: ''
    });

    function handleSubmit(e) { //funcion del boton submit
        e.preventDefault();
        if ( input.title && input.content && input.score) {
            dispatch(postCritic(input));
            alert('Critica mandada con exito.');
            setInput({
                title: '',
                content: '',
                score: ''
            });
        } 
    }


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        // Esta función hace lo siguiente:
        // Cada vez que modifique o agregue algo, a mi estado input, además de lo que tiene, le agrega
        // el value de lo que se esté modificando. La idea es que a medida que vaya llenando los inputs
        // del formulario, me vaya modificando el estado inicial, que tiene todas las propiedades vacías.

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));

        console.log(input)
    }

    useEffect(() =>{
        dispatch(getDetail(props.match.params.id));
    }, [dispatch]);

    const myDish = useSelector((state) => state.detail);

    return (
        <div>
            <div> <NavBar /></div>
            <div className="">
                <div className="carta">

                <CardDetail
                    nombre={myDish.name}
                    calificacion="9"
                    imagen={myDish.image}
                    tags={tags}
                    descripcion={myDish.description}
                    precio={myDish.price}
                    nacionalidad={myDish.nacionality}
                />

                </div>
            </div>

            <div className="dReseñas">

                <div className="reseñaIzquierda">
                
                    <h1>Reseñas del plato</h1>


                    <div className="criticas">
                        {
                            reseñas?.map((el) => {
                                return (
                                    <div>
                                        <CardReseñas
                                            name={el.name}
                                            titulo={el.titulo}
                                            opinion={el.opinion}
                                            imagen={logo}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>

                <div className="reseñaDerecha">

                    <h1>¡Escribe una reseña!</h1>
                    
                    <div className="form">
                    <form onSubmit={e => handleSubmit(e)}>
                    <table>
                        <tr>
                            <td>Titulo</td>
                            <td><input type="text" value={input.title} name='title' onChange={e => handleChange(e)}/>
                            {errors.title && (
                        <p className='error'><strong>{errors.name}</strong></p>
                    )}
                            </td>
                        </tr>
                        <tr>
                            <td>Comentario</td>
                            <td><input type="text" value={input.content} name='content' onChange={e => handleChange(e)}/>
                            {errors.content && (
                        <p className='error'><strong>{errors.name}</strong></p>
                    )}
                            </td>
                        </tr>
                        <tr>
                            <td>Puntaje</td>
                            <td><input type="number" value={input.score} name='score' onChange={e => handleChange(e)}/>
                            {errors.score && (
                        <p className='error'><strong>{errors.name}</strong></p>
                    )}
                            </td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="">Enviar</button></td>
                        </tr>
                    </table>
                    </form>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Detalles;