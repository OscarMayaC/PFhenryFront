import axios from "axios";

export const GET_DISHES = "GET_DISHES";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_TAGS = "GET_TAGS";
export const GET_SECTIONS = "GET_SECTIONS";
// export const SORT = "SORT";
export const FILTER_BY_TAG = "FILTER_BY_TAG";
export const CREATE_USER = "CREATE_USER";
export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const GET_DETAILS = "GET_DETAILS";
export const POST_CRITIC = "POST_CRITIC";
export const GET_AVAILABLE_TABLES = 'GET_AVAILABLE_TABLES';
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART"
export const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO';
export const AUMENTO_CART = 'AUMENTO_CART';
export const DISMINUYO_CART = 'DISMINUYO_CART';
export const CREAR_ORDER = 'CREAR_ORDER';
export const CREAR_ORDER_DETAIL = 'CREAR_ORDER_DETAIL';
export const GET_DISH_ENTRADA = 'GET_DISH_BY_SECTION';
export const GET_DISH_PEQUEÑA_BOTANA = 'GET_DISH_PEQUEÑA_BOTANA';
export const GET_DISH_PRINCIPALES = 'GET_DISH_PRINCIPALES';
export const GET_DISH_ACOMPAÑAMIENTOS = 'GET_DISH_ACOMPAÑAMIENTOS';
export const GET_DISH_POSTRES = 'GET_DISH_POSTRES';
export const GET_DISH_BEBIDAS = 'GET_DISH_BEBIDAS';
export const DECREMENTAR_DEL_CARRITO = 'DECREMENTAR_DEL_CARRITO';
// export const SORT_ENTRADAS = 'SORT_ENTRADAS';
// export const SORT_BOTANAS = 'SORT_BOTANAS';
// export const SORT_PRINCIPALES = 'SORT_PRINCIPALES';
// export const SORT_ACOMPAÑAMIENTOS = 'SORT_ACOMPAÑAMIENTOS';
// export const SORT_POSTRES = 'SORT_POSTRES';



export function filterDishByTag(tag) {
  return {
    type: FILTER_BY_TAG,
    payload: tag,
  };
}


export function getDishEntrada(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/1`)
    
    dispatch({
      type: GET_DISH_ENTRADA,
      payload: json.data,
      

    });
  }
}


export function getDishBotana(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/2`)
    dispatch({
      type: GET_DISH_PEQUEÑA_BOTANA,
      payload: json.data,

    });
  }
}

export function getDishPrincipales(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/3`)
    dispatch({
      type: GET_DISH_PRINCIPALES,
      payload: json.data,

    });
  }
}

export function getDishAcompañamientos(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/4`)
    dispatch({
      type: GET_DISH_ACOMPAÑAMIENTOS,
      payload: json.data,

    });
  }
}

export function getDishPostres(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/5`)
    dispatch({
      type: GET_DISH_POSTRES,
      payload: json.data,

    });
  }
}

export function getDishBebidas(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/sections/6`)
    dispatch({
      type: GET_DISH_BEBIDAS,
      payload: json.data,

    });
  }
}






// este POST 

export function crearOrden(payload) {
  return async function (dispatch) {
    let response = await axios.post("https://pfhenryback-production.up.railway.app/orderDetail", payload);
    return response;
  };
}


export function crearOrdenDetail(payload) {
  return async function (dispatch) {
    let response = await axios.post("https://pfhenryback-production.up.railway.app/orderdetails", payload);
    return response;
  };
}



export function postUsers(payload) {
  return async function (dispatch) {
    let response = await axios.post("https://pfhenryback-production.up.railway.app/users", payload);
    return response;
  };
}

export function getUserByLogin(email, password) {
  return async function (dispatch) {
    let response = await axios.post("https://pfhenryback-production.up.railway.app/users/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    return dispatch({
      type: GET_USER_LOGIN,
      payload: response.data,
    });
  };
}





export const agregarAlCarrito = (producto) => {
  return {
    type: AGREGAR_AL_CARRITO,
    payload: producto,
  };
};

export const restarAlCarrito = (producto) => {
  return {
    type: DECREMENTAR_DEL_CARRITO,
    payload: producto,
  };
};



export const aumentarIndiceCart=()=>{
  return {
    type: "AUMENTO_CART"
  };
}


export const disminuirIndiceCart=()=>{
  return {
    type: "DISMINUYO_CART"
  };
}


export const actualizarTotalQuantity = (items) => ({
  type: 'UPDATE_TOTAL_QUANTITY',
  payload: items.reduce((acc, item) => acc + item.quantity, 0)
});
// export function carritoAgrego(product){

//       return {
//         type: "ADD_PRODUCT_CART",
//         payload: product,
//       }

//   }

export function getAllSections() {
  return async function (dispatch) {
    var json = await axios.get("https://pfhenryback-production.up.railway.app/sections");
    // console.log(json.data)
    dispatch({
      type: "GET_SECTIONS",
      payload: json.data,
    });
  };
}

export function getAllTags() {
  return async function (dispatch) {
    var json = await axios.get("https://pfhenryback-production.up.railway.app/tags");
    // console.log(json.data)
    dispatch({
      type: "GET_TAGS",
      payload: json.data,
    });
  };
};

export function getAllDishes() {
  return async function (dispatch) {
    var json = await axios.get("https://pfhenryback-production.up.railway.app/dishes");
    dispatch({
      type: "GET_DISHES",
      payload: json.data,
    });
  };
}




// export function SortEntradas(order) {
  
//   return {
//     type: "SORT_ENTRADAS",
//     payload: order,
//   };
// }


// export function SortBotanas(order) {
//   return {
//     type: "SORT_BOTANAS",
//     payload: order,
//   };
// }

// export function SortPrincipales(order) {
//   return {
//     type: "SORT_PRINCIPALES",
//     payload: order,
//   };
// }

// export function SortAcompañamientos(order) {
//   return {
//     type: "SORT_ACOMPAÑAMIENTOS",
//     payload: order,
//   };
// }

// export function SortPostres(order) {
//   return {
//     type: "SORT_POSTRES",
//     payload: order,
//   };
// }

// export function SortBebidas(order) {
//   return {
//     type: "SORT_BEBIDAS",
//     payload: order,
//   };
// }


export function postDish(payload) {
  return async function () {
    const response = await axios.post("https://pfhenryback-production.up.railway.app/dishes", payload);
    return response;
  };
}

export function searchDish(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("https://pfhenryback-production.up.railway.app/dishes?name=" + name);
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data,
      });
    } catch {
      return alert("No se encontró el plato");
    }
  };
}

export function getDetail(id){
  console.log(id);
  return async function(dispatch){
      try{
      let json = await axios.get(`https://pfhenryback-production.up.railway.app/dishes/${id}`);
      return dispatch({
          type: 'GET_DETAILS',
          payload: json.data
      })
  }catch(error){
      console.log(error);
  }
  }
}

export function postCritic(payload){
  return async function(dispatch){
      const json = await axios.post("https://pfhenryback-production.up.railway.app/critics/", payload);
      console.log(json);
      return json;
  }
}



export const getTables = (body) => {
  return async(dispatch) => {
      try {
          const availableTables = await axios.get('https://pfhenryback-production.up.railway.app/tables/', body)
          console.log(availableTables)
          dispatch({type: GET_AVAILABLE_TABLES, payload: availableTables})
      } catch (error) {
          console.log(error.response.data.error)
      }
  };
};