import axios from "axios";

export const GET_DISHES = "GET_DISHES";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_TAGS = "GET_TAGS";
export const GET_SECTIONS = "GET_SECTIONS";
export const SORT = "SORT";
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
export const SAVE_INFO_BOOKING = "SAVE_INFO_BOOKING";

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
      let response = await axios.post("http://localhost:3001/login", {
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

      return dispatch({
        type: GET_USER_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

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

export const agregarAlCarrito = (producto) => {
  return {
    type: "AGREGAR_AL_CARRITO",
    payload: producto,
  };
};

// UNO PARA AUMENTAR QUANTITY OTRO PARA RESTAR
// UNO PARA SACAR PRODUCTO CON ID ESPECIFICO DE Carrito

export const aumentarIndiceCart = () => {
  return {
    type: "AUMENTO_CART",
    payload: 1,
  };
};

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
    var json = await axios.get(
      "https://pfhenryback-production.up.railway.app/tags"
    );
    // console.log(json.data)
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

export function Sort(order) {
  return {
    type: "SORT",
    payload: order,
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

export function filterDishByTag(payload) {
  return {
    type: "FILTER_BY_TAG",
    payload,
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
