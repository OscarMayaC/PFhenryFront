import {
    AGREGAR_AL_CARRITO,
    DECREMENTAR_DEL_CARRITO,
    AUMENTO_CART,
    DISMINUYO_CART,
    SEARCH_NAME,
    GET_DISHES,
    GET_TAGS,
    GET_SECTIONS,
    FILTER_BY_TAG,
    CREATE_USER,
    GET_USER_LOGIN,
    GET_DETAILS,
    POST_CRITIC,
    GET_AVAILABLE_TABLES,
    GET_DISH_ENTRADA,
    GET_DISH_PEQUEÑA_BOTANA,
    GET_DISH_PRINCIPALES,
    GET_DISH_ACOMPAÑAMIENTOS,
    GET_DISH_POSTRES,
    GET_DISH_BEBIDAS,
    GET_USER_INFO,
    POST_BOOKING,
    POST_BOOKING_ERROR,
    SAVE_INFO_BOOKING,
    PUT_BOOKING,
    PUT_BOOKING_ERROR,
    RESERVAS_ADMIN,
    ORDERS_ADMIN,
    ID_TAG,
    ID_DISH,
    DATA_FOR_EDIT_DISH,
    AGREGAR_OFERTAS_DEL_DIA,
    CHANGE_DATA
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
  itsAdmin:false,
  userData: [],
  sections: [],
  SearchDish: [],
  Dishes: [],
  detail: [],
  tables: [],
  quantity:0,
  Entradas:[],
  EntradasFiltrado:[],
  EntradasAux:[],
  PequeñaBotana:[],
  Principales:[],
  Acompañamientos:[],
  Postres:[],
  Bebidas:[],
  TotalQuantityCart:0,
  reserva: [],
  Carrito: [],
  Quantity: 0,
  bookingsUser: [],
  bookingUpdateId: null,
  allBookingsAdmin: [],
  infoBooking: [],
  responseBooking: [],
  reservasAdminTotal: [],
  OrdersAdminTotal:[],
  idTag:[],
  idDish:[],
  dataForEditDish:[],
  ofertasDelDia:[]

};

function rootReducer(state = initialState, action) {


    switch (action.type) {
case AGREGAR_OFERTAS_DEL_DIA:
  return{
    ...state,
    ofertasDelDia: action.payload
  }


case DATA_FOR_EDIT_DISH:
  return{
    ...state,
    dataForEditDish: action.payload
  }

      case  ID_DISH:
        return {
          ...state,
          idDish: action.payload,
        
        };

      case  ID_TAG:
        return {
          ...state,
          idTag: action.payload,
        
        };

      case  ORDERS_ADMIN:
        return {
          ...state,
          OrdersAdminTotal: action.payload,
        
        };


      case  RESERVAS_ADMIN:
        return {
          ...state,
          reservasAdminTotal: action.payload,
        
        };

      case 'UPDATE_TOTAL_QUANTITY':
        return { ...state, totalQuantityCart: action.payload };


      case GET_DISH_ENTRADA:

        return {
          ...state,
          Entradas: action.payload,
          EntradasFiltrado: action.payload,
        
        };
        
        case GET_DISH_PEQUEÑA_BOTANA:

        return {
          ...state,
          PequeñaBotana: action.payload,
        
        };
        case GET_DISH_PRINCIPALES:

        return {
          ...state,
          Principales: action.payload,
        
        };
        case GET_DISH_ACOMPAÑAMIENTOS:

        return {
          ...state,
          Acompañamientos: action.payload,
        
        };
        case GET_DISH_POSTRES:

        return {
          ...state,
          Postres: action.payload,
        
        };      
        case GET_DISH_BEBIDAS:

        return {
          ...state,
          Bebidas: action.payload,
        
        };
     
        case AGREGAR_AL_CARRITO:

        const existingItemIndex = state.Carrito.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          state.Carrito[existingItemIndex].quantity += 1;
        } else {
          state.Carrito.push(action.payload)
          
        }
        return { ...state, 
          Carrito: [...state.Carrito]
      }

     

      case DECREMENTAR_DEL_CARRITO:
        const itemIndex = state.Carrito.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          if (state.Carrito[itemIndex].quantity === 1) {
            state.Carrito.splice(itemIndex, 1); // Eliminar el elemento del carrito si la cantidad es 1
          } else {
            state.Carrito[itemIndex].quantity -= 1; // Decrementar la cantidad si es mayor que 1
          }
        }
        return { ...state, Carrito: [...state.Carrito] };


        case AUMENTO_CART:
          return {
            ...state,
            quantity: state.quantity + 1 ,
          };
          case DISMINUYO_CART:
            return {
              ...state,
              quantity: state.quantity - 1 ,
            };


    // case AGREGAR_AL_CARRITO:
    //   return {
    //     ...state,
    //     Carrito: [...state.Carrito, action.payload],
    //     // Quantity:[...state.Quantity, action.payload.quantity],
    //   };


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
  


      case CREATE_USER:
        return {
          ...state,
        };

 

      case GET_DETAILS:
          return{
            ...state,
            detail: action.payload,
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

   

    case GET_USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
        userId: action.payload.id,
        userData: action.payload,
        itsAdmin: action.payload.admin
      };

    case GET_USER_INFO:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
        idUsuario: action.payload.id,
        userData: action.payload
      };

    case CHANGE_DATA:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
        idUsuario: action.payload.id,
        userData: action.payload

      }
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_CRITIC:
      return {
        ...state,
        Quantity: [...(state.Quantity + action.payload)],
      }


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
        responseBooking: action.payload
      };
    case 'GET_AVAILABLE_TABLES_ERROR':
      return {
        ...state,
        responseBooking: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
