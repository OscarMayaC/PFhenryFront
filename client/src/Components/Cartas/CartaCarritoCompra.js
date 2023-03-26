import React from 'react';
import '../../Pages/Styles/CartaCarritoCompra.modules.css'
// import { useSelector } from 'react-redux';



// let cantidadSolicitada = 1

export default function CartaCarritoCompra({id, name, image, price, quantity}) {
        // const carrito = useSelector((state) => state.Carrito);
          
    //     function buscarPorId(id, array) {
    //         // Iterar sobre el array y buscar el elemento con la propiedad "id" igual al valor que se le pasa como argumento
    //         for (let i = 0; i < array.length; i++) {
    //           if (array[i].id === id) {
    //             // Si se encuentra un elemento con el "id" buscado, retornarlo
    //             return console.log(array[i].quantity);
    //           }
    //         }
    //         return null;}




    //     function hola(){
           
    //   buscarPorId(id,carrito)

    //     }
    //    const contadorCart = carrito[id].quantity

    return (
        <div>
         
        <div className='cards-carrito-previsualizacion'>
            
            <div className='imagenes-carrito-previsualizacion'>
                <img src={image} alt='imagen de plato' className='img-carta-carrito-compra'></img>
            </div>
            <div className='zona-info-plato-carrito-previsualizacion'>
                <div className='info-importante-carrito-previsualizacion'>
                     <h1 className='titulo-plato-carrito-previsualizacion' >{name}</h1>
                     {/* <p className='cantidad-plato-carrito-previsualizacion'>x{quantity}</p> */}
                     <p className='precio-plato-carrito-previsualizacion'>${price}</p>
                </div>
                <div className='botones-agregar-o-quitar-mas-del-mismo-al-carro'>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion-izquierda">-</button>
                <button className="boton-agregar-uno-mas-carrito-previsualizacion-derecha">+</button>
                </div>
            </div>

        </div>
        
        </div>
    );
}

