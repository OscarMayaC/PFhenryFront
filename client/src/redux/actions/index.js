import axios from "axios";

export const GET_DISHES = "GET_DISHES";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_TAGS = "GET_TAGS";
export const GET_SECTIONS = "GET_SECTIONS";
export const FILTER_BY_TAG = "FILTER_BY_TAG";
export const CREATE_USER = "CREATE_USER";
export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const GET_DETAILS = "GET_DETAILS";
export const POST_CRITIC = "POST_CRITIC";
export const GET_AVAILABLE_TABLES = "GET_AVAILABLE_TABLES";
export const POST_BOOKING = "POST_BOOKING";
export const POST_BOOKING_ERROR = "POST_BOOKING_ERROR";
export const PUT_BOOKING = "PUT_BOOKING";
export const PUT_BOOKING_ERROR = "PUT_BOOKING_ERROR";
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const AGREGAR_AL_CARRITO = "AGREGAR_AL_CARRITO";
export const AUMENTO_CART = "AUMENTO_CART";
export const GET_USER_INFO = "GET_USER_INFO";
export const CHANGE_DATA = "CHANGE_DATA";
export const SAVE_INFO_BOOKING = "SAVE_INFO_BOOKING";
export const GET_USER_GITHUB = "GET_USER_GITHUB"
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
export const RESERVAS_ADMIN = 'RESERVAS_ADMIN';
export const ORDERS_ADMIN = 'ORDERS_ADMIN';
export const CREAR_PLATO = 'CREAR_PLATO';
export const EDIT_DISH_ADMIN = 'EDIT_DISH_ADMIN';
export const ID_TAG = 'ID_TAG';
export const ID_DISH = 'ID_DISH';
export const DATA_FOR_EDIT_DISH = 'DATA_FOR_EDIT_DISH';
export const AGREGAR_OFERTAS_DEL_DIA = 'AGREGAR_OFERTAS_DEL_DIA';


export function idTag(payload){
  return{
    type: ID_TAG,
    payload: payload,
  
  };
}

export function idDish(payload){
  return{
    type: ID_DISH,
    payload: payload,
  
  };
}

export function dataForEditDish(payload){
  return{
    type: DATA_FOR_EDIT_DISH,
    payload: payload,
  
  };
}

export function eliminarPlatoAdmin(payload){
  return async function (dispatch){
    try {
      let json = await axios.delete(`https://pfhenryback-production.up.railway.app/dishes/${payload.id}`);
      console.log(json);
      // return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}



export function crearPlatoAdmin(payload){
  console.log(payload)
  return async function (dispatch){
    try {
      let json = await axios.post(`https://pfhenryback-production.up.railway.app/dishes`, {
        name: payload.name,  
        description: payload.description,
        image: payload.image,
        price: payload.price,
        availability: payload.availability,
        nationality: payload.nationality,
        tagId: payload.tags,
        sectionId: payload.sectionId,
      }
      );
      console.log(json);
      // return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}




export function editarPlatoAdmin(payload){
  console.log(payload)
  return async function (dispatch){
    try {
      let json = await axios.put(`https://pfhenryback-production.up.railway.app/dishes/${payload.id}`, {
        id:payload.id,
        name: payload.name,  
        description: payload.description,
        image: payload.image,
        price: payload.price,
        availability: payload.availability,
        nationality: payload.nationality,
        tagId: payload.tagId,
        sectionId: payload.sectionId,
      }
      );
      console.log(json);
      // return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}



export function crearTagAdmin(payload){
  return async function (dispatch){
    try {
      let json = await axios.post(`https://pfhenryback-production.up.railway.app/tags`, {
        description: payload.description
      });
      console.log(json);
      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}


export function editTagAdmin(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.put(`https://pfhenryback-production.up.railway.app/tags/${payload.id}`, {
        description: payload.description
      });

      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export function deleteTagAdmin(payload){
  return async function (dispatch) {
    const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFkbWluIjp0cnVlLCJpYXQiOjE2ODA1NTM2NjUsImV4cCI6MTY4MDU2MDg2NX0.Nm0fXA-5RhWbFQfmTck9fUzTjw8ZU4HBBayammcRNJg"
    try {
      let json = await axios.delete(`https://pfhenryback-production.up.railway.app/tags/${payload}`,
      {
        headers:{
          Authorization: token
        },
       }
      );
      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
  

export function editDishAdmin(payload){
  return async function (dispatch){
    let json = await axios.put(`https://pfhenryback-production.up.railway.app/dishes/${payload.id}`, payload)
    
    dispatch({
      type: EDIT_DISH_ADMIN,
      payload: json.data,
      

    });
  }
}
// {[name:]}

export function getPedidosAdmin(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/orders`)
    
    dispatch({
      type: ORDERS_ADMIN,
      payload: json.data,
      

    });
  }
}


export function getReservasAdmin(){
  return async function (dispatch){
    let json = await axios.get(`https://pfhenryback-production.up.railway.app/bookings/admin`)
    
    dispatch({
      type: RESERVAS_ADMIN,
      payload: json.data,
      

    });
  }
}



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
    let response = await axios.post(
      "https://pfhenryback-production.up.railway.app/users",
      payload
    );
    return response;
  };
}

export function getUserByLogin(email, password) {
  return async function (dispatch) {
    try {
      let response = await axios.post("https://pfhenryback-production.up.railway.app/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      console.log(response.data.data);
      console.log(response.data.tokenSession);
      localStorage.setItem("userId", JSON.stringify(response.data.data.id));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem(
        "userToken",
        JSON.stringify(response.data.tokenSession)
      );
      localStorage.setItem("admin", JSON.stringify(response.data.data.admin));
      
      return dispatch({
        type: GET_USER_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const githubLogin = (data) => {
  return async function (dispatch) {
  try {
    
    return dispatch({
      type: GET_USER_GITHUB,
      payload: data,
    });

  } catch (error) {
    console.log(error);
  }
    
  
  
};}



export const getUsersById = (id) => {
  return async function (dispatch) {
    const token = localStorage.getItem("userToken");
    try {
      let response = await axios.get(
        "https://pfhenryback-production.up.railway.app/users/" + id,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(response.data)
      return dispatch({
        type: GET_USER_INFO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const ChangeUserInfo = (id) => {
  return async function (dispatch) {
    const token = localStorage.getItem("userToken")

    try {
      const response = await axios.put("https://pfhenryback-production.up.railway.app/users/" + id, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.data)
      })

      return dispatch({
        type: CHANGE_DATA,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export const agregarAlCarrito = (producto) => {
  return {
    type: AGREGAR_AL_CARRITO,
    payload: producto,
  };
};


export const agregarOfertasDelDia = (producto) => {
  // console.log(producto)
  return {
    type: AGREGAR_OFERTAS_DEL_DIA,
    payload: producto,
  };
};

export const restarAlCarrito = (producto) => {
  return {
    type: DECREMENTAR_DEL_CARRITO,
    payload: producto,
  };
};


export const aumentarIndiceCart = () => {
  return {
    type: "AUMENTO_CART"
  };
};


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
    var json = await axios.get(
      "https://pfhenryback-production.up.railway.app/sections"
    );
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

    dispatch({
      type: "GET_TAGS",
      payload: json.data,
    });
  };
}

export function getAllDishes() {
  return async function (dispatch) {
    var json = await axios.get(
      "https://pfhenryback-production.up.railway.app/dishes"
    );
    dispatch({
      type: "GET_DISHES",
      payload: json.data,
    });
  };
}



export function postDish(payload) {
  return async function () {
    const response = await axios.post(
      "https://pfhenryback-production.up.railway.app/dishes",
      payload
    );
    return response;
  };
}

export function searchDish(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "https://pfhenryback-production.up.railway.app/dishes?name=" + name
      );
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data,
      });
    } catch {
      return alert("No se encontró el plato");
    }
  };
}

export function getDetail(id) {
  console.log(id);
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `https://pfhenryback-production.up.railway.app/dishes/${id}`
      );
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCritic(payload) {
  return async function (dispatch) {
    const json = await axios.post(
      "https://pfhenryback-production.up.railway.app/critics/",
      payload
    );
    console.log(json);
    return json;
  };
}



export const getTables = (body) => {
  return async (dispatch) => {
    try {
      const availableTables = (
        await axios.post(
          "https://pfhenryback-production.up.railway.app/tables/",
          body
        )
      ).data;
      dispatch({ type: GET_AVAILABLE_TABLES, payload: availableTables });
    } catch (error) {
      dispatch({type: 'GET_AVAILABLE_TABLES_ERROR', payload: error.response.data.error})
      console.log(error.response.data.error);
    }
  };
};

export const postBooking = (body) => {
  return async (dispatch) => {
    try {
      const reservationCreated = (
        await axios.post(
          "https://pfhenryback-production.up.railway.app/bookings/",
          body
        )
      ).data;
      console.log(reservationCreated);
      dispatch({ type: POST_BOOKING, payload: reservationCreated });
    } catch (error) {
      dispatch({
        type: POST_BOOKING_ERROR,
        payload: error.response.data.error,
      });
      console.log(error.response.data.error);
    }
  };
};

export function saveBookingsUser(bookings) {
  return {
    type: "saveBookingsUser",
    payload: bookings,
  };
}

export function deleteBookingUser(idBooking, idUser) {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://pfhenryback-production.up.railway.app/bookings/${idBooking}`
      );
      if (idUser) {
        const refreshBookings = await axios.get(
          `https://pfhenryback-production.up.railway.app/bookings/${idUser}`
        );
        dispatch(saveBookingsUser(refreshBookings.data));
      }
      const refreshBookingsAdmin = await axios.get(
        `https://pfhenryback-production.up.railway.app/bookings/admin/`
      );
      dispatch(saveAllBookingsAdmin(refreshBookingsAdmin.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function saveIdBookingUpdate(idBooking) {
  return {
    type: "saveIdBookingUpdate",
    payload: idBooking,
  };
}

export function saveAllBookingsAdmin(bookings) {
  return {
    type: "saveAllBookingsAdmin",
    payload: bookings,
  };
}

export function saveInfoBooking(infoBooking) {
  return {
    type: SAVE_INFO_BOOKING,
    payload: infoBooking,
  };
}

export function putBooking(newData, bookingUpdateId) {
  return async (dispatch) => {
    try {
      const updatedReservation = (
        await axios.put(
          `https://pfhenryback-production.up.railway.app/bookings/${bookingUpdateId}`,
          newData
        )
      ).data;
      dispatch({ type: PUT_BOOKING, payload: updatedReservation });
    } catch (error) {
      dispatch({ type: PUT_BOOKING_ERROR, payload: error.response.data.error });
      console.log(error.response.data.error);
    }
  };
}

export function filterBookingsInThisDate(date, idUser) {
  return async (dispatch) => {
    try {
      if (idUser) {
        const bookinsInThisDate = await axios.get(
          `https://pfhenryback-production.up.railway.app/bookings/bookingsInThisDate?date=${date}&idUser=${idUser}`
        );
        dispatch({
          type: "filterBookingsInThisDateUser",
          payload: bookinsInThisDate.data,
        });
      } else {
        const bookinsInThisDate = await axios.get(
          `https://pfhenryback-production.up.railway.app/bookings/bookingsInThisDate?date=${date}&idUser=`
        );
        dispatch({
          type: "filterBookingsInThisDateAdmin",
          payload: bookinsInThisDate.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function refreshAdminBookings() {
  return async (dispatch) => {
    try {
      const refreshBookingsAdmin = await axios.get(
        `https://pfhenryback-production.up.railway.app/bookings/admin/`
      );
      dispatch(saveAllBookingsAdmin(refreshBookingsAdmin.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function refreshUserBookings(idUser) {
  return async (dispatch) => {
    try {
      const refreshBookings = await axios.get(
        `https://pfhenryback-production.up.railway.app/bookings/${idUser}`
      );
      dispatch(saveBookingsUser(refreshBookings.data));
    } catch (error) {
      console.log(error);
    }
  };
}
