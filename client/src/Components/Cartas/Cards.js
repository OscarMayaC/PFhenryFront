import React from 'react';
import '../../Pages/Styles/Cards.modules.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { agregarAlCarrito} from '../../redux/actions/index';
// import { aumentarIndiceCart} from '../../redux/actions/index';



// let carrito=[];
let quantity=0;
//  export let quantityCart = 0;

export default function Cards({id, name, description, image, price, nationality}) {
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.Carrito);
    // const indiceCarrito = useSelector((state) => state.Quantity);
    // const QuantityStore = useSelector((state) => state.Quantity)
// SET ITEM 
       const saveLocal=()=>{
        localStorage.setItem("carrito",JSON.stringify(carrito));
        };

      
          
            // const agregarProducto = () => {
            //   dispatch(agregarAlCarrito({ id, name,description, price, image, nationality, quantity }));
            // };
          

// GET ITEM 

        // const getLocal=()=>{
        //     JSON.parse(localStorage.getItem("carrito"))
        // }


// FUNCION CALCULADORA DE CANTIDAD DE PRODUCTO
// function buscarPorId(id, array) {
//     // Iterar sobre el array y buscar el elemento con la propiedad "id" igual al valor que se le pasa como argumento
//     for (let i = 0; i < array.length; i++) {
//     if (array[i].id === id) {
//         // Si se encuentra un elemento con el "id" buscado, retornarlo
//         return array[i].quantity;
//         console.log(array[i].quantity)
//     }
//     }}





// FUNCTION GUARDADORA DE PRODUCTOS 



             const sumarAcarrito=()=>{
                  
                  const repeat = carrito.some ((repeatProduct)=> repeatProduct.id === id);

                  if(repeat){
                    carrito.forEach((prod)=>{
                        if(prod.id === id){
                            prod.quantity++;
                            quantity++;
                            
                           }
                    });
                    // dispatch(aumentarIndiceCart())
                    // console.log(indiceCarrito)
                    // SUBIR ACTUALIZACION DE PRODUCTOS A LOCALSTORAGE ATRAVEZ DE GLOBAL CARRITO 
                    saveLocal()

                    // AUMENTAR CANTIDAD EN EL TEXTO DE CARRITO 
                    const cartCounterElement = document.getElementsByClassName("numero-cantidad-compras-carrito");
                    cartCounterElement[0].textContent = quantity.toString();
                    }else{
                    
                    dispatch(agregarAlCarrito({ id, name, price, image, quantity }));
                    // dispatch(aumentarIndiceCart())
                    quantity++;

                    // console.log(indiceCarrito)

                    
                    // SUBIR ACTUALIZACION DE PRODUCTOS A LOCALSTORAGE ATRAVEZ DE GLOBAL CARRITO 
                    saveLocal()


                    // AUMENTAR CANTIDAD EN EL TEXTO DE CARRITO 
                    const cartCounterElement = document.getElementsByClassName("numero-cantidad-compras-carrito");
                    cartCounterElement[0].textContent = quantity.toString();
                    // console.log(id)
                    // console.log(carrito[id].quantity)
                    // if(console.log(buscarPorId(id, carrito))===undefined){return 1}else{return console.log(buscarPorId(id, carrito))}
                   
                    // UNA ACCION QUE SUME 1 CANTIDAD AL CARRITO en el store 
                }


                                }


    return (
        <div className='cards'>
            
            <div className='zona-imagenes-carta-mas-boton'>
                <img src={image} alt='imagen de plato' className='img-carta'></img>
               
                <div className='circulo-div-agregar-carrito'>
                <button onClick={sumarAcarrito} className="boton-agregar-carrito-en-card">+</button>
                </div>

            </div>
            <div className='zona-info-plato-texto'>
            <h1 className='titulo-plato-carta' >{name}</h1>
                {/* <p className='id-plato'>{id}</p> */}
              
                <p className='descripcion-plato-carta'>{description}</p>
                <p className='precio-plato'>€{price}</p>
                <p className='nacionalidad-plato'>{nationality}</p>
                <Link to={"/detalles/" +id} className="link-a-detalles-por-id">
                    <div className='leer-mas-div'>
                    <h1 className='leer-mas-txt'>Leer más</h1>
                    </div>
                    </Link>
            </div>

        </div>
        );
    };
    
    