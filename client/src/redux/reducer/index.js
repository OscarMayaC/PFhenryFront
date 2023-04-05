import {
  AGREGAR_AL_CARRITO,
  AUMENTO_CART,
  SEARCH_NAME,
  GET_DISHES,
  GET_TAGS,
  GET_SECTIONS,
  SORT,
  FILTER_BY_TAG,
  CREATE_USER,
  GET_USER_LOGIN,
  GET_DETAILS,
  POST_CRITIC,
  GET_AVAILABLE_TABLES,
  GET_USER_INFO,
  POST_BOOKING,
  POST_BOOKING_ERROR,
  SAVE_INFO_BOOKING,
  PUT_BOOKING,
  PUT_BOOKING_ERROR,
  GET_USER_GITHUB
} from "../actions/index";

const initialState = {
  allDishes: [],
  allTags: [],
  isLoggedIn: false,
  email: "",
  password: "",
  userId: "",
  userToken: "",
  user: [],
  admin: false,
  userData: [],
  sections: [],
  SearchDish: [],
  Dishes: [],
  detail: [],
  tables: [],
  reserva: [],
  Carrito: [],
  Quantity: 0,
  bookingsUser: [],
  bookingUpdateId: null,
  allBookingsAdmin: [],
  infoBooking: [],
  responseBooking: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_AL_CARRITO:
      return {
        ...state,
        Carrito: [...state.Carrito, action.payload],
        // Quantity:[...state.Quantity, action.payload.quantity],
      };

    case AUMENTO_CART:
      return {
        ...state,
        // Carrito: [...state.Carrito, action.payload],
        Quantity: [...(state.Quantity + action.payload)],
      };

    case GET_DISHES:
      return {
        ...state,
        allDishes: action.payload,
      };

    case GET_TAGS:
      return {
        ...state,
        allTags: action.payload,
      };

    case SEARCH_NAME:
      return {
        ...state,
        SearchDish: action.payload,
      };

    case SORT:
      let orderedDishes = [...state.allDishes];
      orderedDishes = orderedDishes.sort((a, b) => {
        if (action.payload === "ASCENDENTE_NOMBRE") {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        } else if (action.payload === "DESCENDENTE_NOMBRE") {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        } else if (action.payload === "ASCENDENTE_PRECIO") {
          return b.price - a.price;
        } else if (action.payload === "DESCENDENTE_PRECIO") {
          return a.price - b.price;
        }
        return 0;
      });
      return {
        ...state,
        allDishes:
          action.payload === "Filtro" ? state.allDishes : orderedDishes,
      };

    case FILTER_BY_TAG:
      const allDishes = state.allDishes;
      const typeFiltered =
        action.payload === "type"
          ? allDishes
          : allDishes.filter((e) => e.sectionId.includes(action.payload));
      return {
        ...state,
        Dishes: typeFiltered,
      };

    case CREATE_USER:
      return {
        ...state,
      };

    case GET_USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        admin: action.payload.data.admin,
        email: action.payload.data.email,
        userId: action.payload.data.id,
        userData: action.payload.data,
        userToken: action.payload.tokenSession,
      };

      case GET_USER_GITHUB:
        return {
          ...state,
          isLoggedIn: true,
          admin: action.payload.usuario.admin,
          email: action.payload.usuario.email,
          userId: action.payload.usuario.id,
          userData: action.payload.usuario,
          userToken: action.payload.token,
        };

    case GET_USER_INFO:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
        idUsuario: action.payload.id,
        userData: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_CRITIC:
      return {
        ...state,
      };

    case GET_SECTIONS:
      return {
        ...state,
        sections: action.payload,
      };

    case GET_AVAILABLE_TABLES:
      return {
        ...state,
        tables: action.payload,
      };
    case POST_BOOKING:
      return {
        ...state,
        reserva: action.payload,
      };
    case POST_BOOKING_ERROR:
      return {
        ...state,
        responseBooking: action.payload,
      };
    case "saveBookingsUser":
      return {
        ...state,
        bookingsUser: action.payload,
      };
    case "saveIdBookingUpdate":
      return {
        ...state,
        bookingUpdateId: action.payload,
      };
    case "saveAllBookingsAdmin":
      return {
        ...state,
        allBookingsAdmin: action.payload,
      };
    case "filterBookingsInThisDateAdmin":
      return {
        ...state,
        allBookingsAdmin: action.payload,
      };
    case "filterBookingsInThisDateUser":
      return {
        ...state,
        bookingsUser: action.payload,
      };
    case SAVE_INFO_BOOKING:
      return {
        ...state,
        infoBooking: action.payload,
      };
    case PUT_BOOKING:
      return {
        ...state,
        responseBooking: action.payload,
      };
    case PUT_BOOKING_ERROR:
      return {
        ...state,
        responseBooking: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
