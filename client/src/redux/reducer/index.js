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
    // SORT_ENTRADAS,
    // SORT_BOTANAS,
    // SORT_PRINCIPALES,
    // SORT_ACOMPAÑAMIENTOS,
    // SORT_POSTRES,
    // SORT_BEBIDAS
  } from "../actions/index";

const initialState = {
  allDishes: [],
  allTags: [],
  isLoggedIn: false,
  email: "",
  password: "",
  userId: "",
  sections: [],
  SearchDish: [],
  Dishes: [],
  detail:[],
  tables: [],
  Carrito:[],
  quantity:0,
  Entradas:[],
  EntradasFiltrado:[],
  EntradasAux:[],
  PequeñaBotana:[],
  Principales:[],
  Acompañamientos:[],
  Postres:[],
  Bebidas:[],
  TotalQuantityCart:0
};


function rootReducer(state = initialState, action) {
    switch (action.type) {


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

    //   case RESTAR_AL_CARRITO:

    //   const existingTakeItemIndex = state.Carrito.findIndex(item => item.id === action.payload.id);
    //   if (existingTakeItemIndex >= 0) {
    //     state.Carrito[existingItemIndex].quantity -= 1;
    //   } else {
    //     state.Carrito.push(action.payload)
    //   }
    //   return { ...state, 
    //     Carrito: [...state.Carrito]
    // }






             


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





case GET_SECTIONS:
  return {
    ...state,
    sections: action.payload,
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
  
       

          // case SORT_ENTRADAS:

          //   let orderedEntradas = [...state.Entradas];

          //   orderedEntradas = orderedEntradas.sort((a, b) => {
          //     if (action.payload === "ASCENDENTE_NOMBRE") {
          //       if (a.name < b.name) {
          //         return -1;
          //       }
          //       if (a.name > b.name) {
          //         return 1;
          //       }
          //       return 0;
          //     } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //       if (a.name < b.name) {
          //         return 1;
          //       }
          //       if (a.name > b.name) {
          //         return -1;
          //       }
          //       return 0;
          //     } else if (action.payload === "ASCENDENTE_PRECIO") {
          //       return b.price - a.price;    
          //     } else if (action.payload === "DESCENDENTE_PRECIO") {
          //      return a.price - b.price;
          //     }
          //     return 0; 
          //   });
       
          //   return {
          //     ...state,
          //     Entradas:
          //       action.payload === "Filtro" ? state.Entradas : orderedEntradas
          //   };
    
          // case SORT_BOTANAS:
          //     let orderedBotanas = [...state.PequeñaBotana];
          //     orderedBotanas = orderedBotanas.sort((a, b) => {
          //       if (action.payload === "ASCENDENTE_NOMBRE") {
          //         if (a.name < b.name) {
          //           return -1;
          //         }
          //         if (a.name > b.name) {
          //           return 1;
          //         }
          //         return 0;
          //       } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //         if (a.name < b.name) {
          //           return 1;
          //         }
          //         if (a.name > b.name) {
          //           return -1;
          //         }
          //         return 0;
          //       } else if (action.payload === "ASCENDENTE_PRECIO") {
          //         return b.price - a.price;    
          //       } else if (action.payload === "DESCENDENTE_PRECIO") {
          //        return a.price - b.price;
          //       }
          //       return 0; 
          //     });
          //     return {
          //       ...state,
          //       PequeñaBotana:
          //         action.payload === "Filtro" ? state.PequeñaBotana : orderedBotanas
          //     };
    
          // case SORT_PRINCIPALES:
          //       let orderedPrincipales = [...state.Principales];
          //       orderedPrincipales = orderedPrincipales.sort((a, b) => {
          //         if (action.payload === "ASCENDENTE_NOMBRE") {
          //           if (a.name < b.name) {
          //             return -1;
          //           }
          //           if (a.name > b.name) {
          //             return 1;
          //           }
          //           return 0;
          //         } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //           if (a.name < b.name) {
          //             return 1;
          //           }
          //           if (a.name > b.name) {
          //             return -1;
          //           }
          //           return 0;
          //         } else if (action.payload === "ASCENDENTE_PRECIO") {
          //           return b.price - a.price;    
          //         } else if (action.payload === "DESCENDENTE_PRECIO") {
          //          return a.price - b.price;
          //         }
          //         return 0; 
          //       });
          //       return {
          //         ...state,
          //         Principales:
          //           action.payload === "Filtro" ? state.Principales : orderedPrincipales
          //       };
        
          // case SORT_ACOMPAÑAMIENTOS:
          //         let orderedAcompañamientos = [...state.Acompañamientos];
          //         orderedAcompañamientos = orderedAcompañamientos.sort((a, b) => {
          //           if (action.payload === "ASCENDENTE_NOMBRE") {
          //             if (a.name < b.name) {
          //               return -1;
          //             }
          //             if (a.name > b.name) {
          //               return 1;
          //             }
          //             return 0;
          //           } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //             if (a.name < b.name) {
          //               return 1;
          //             }
          //             if (a.name > b.name) {
          //               return -1;
          //             }
          //             return 0;
          //           } else if (action.payload === "ASCENDENTE_PRECIO") {
          //             return b.price - a.price;    
          //           } else if (action.payload === "DESCENDENTE_PRECIO") {
          //            return a.price - b.price;
          //           }
          //           return 0; 
          //         });
          //         return {
          //           ...state,
          //           Acompañamientos:
          //             action.payload === "Filtro" ? state.Acompañamientos : orderedAcompañamientos
          //         };
                
          // case SORT_POSTRES:
          //           let orderedPostres = [...state.Postres];
          //           orderedPostres = orderedPostres.sort((a, b) => {
          //             if (action.payload === "ASCENDENTE_NOMBRE") {
          //               if (a.name < b.name) {
          //                 return -1;
          //               }
          //               if (a.name > b.name) {
          //                 return 1;
          //               }
          //               return 0;
          //             } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //               if (a.name < b.name) {
          //                 return 1;
          //               }
          //               if (a.name > b.name) {
          //                 return -1;
          //               }
          //               return 0;
          //             } else if (action.payload === "ASCENDENTE_PRECIO") {
          //               return b.price - a.price;    
          //             } else if (action.payload === "DESCENDENTE_PRECIO") {
          //              return a.price - b.price;
          //             }
          //             return 0; 
          //           });
          //           return {
          //             ...state,
          //             Postres:
          //               action.payload === "Filtro" ? state.Postres : orderedPostres
          //           };
            
          // case SORT_BEBIDAS:
          //             let orderedBebidas = [...state.Bebidas];
          //             orderedBebidas = orderedBebidas.sort((a, b) => {
          //               if (action.payload === "ASCENDENTE_NOMBRE") {
          //                 if (a.name < b.name) {
          //                   return -1;
          //                 }
          //                 if (a.name > b.name) {
          //                   return 1;
          //                 }
          //                 return 0;
          //               } else if (action.payload === "DESCENDENTE_NOMBRE") {
          //                 if (a.name < b.name) {
          //                   return 1;
          //                 }
          //                 if (a.name > b.name) {
          //                   return -1;
          //                 }
          //                 return 0;
          //               } else if (action.payload === "ASCENDENTE_PRECIO") {
          //                 return b.price - a.price;    
          //               } else if (action.payload === "DESCENDENTE_PRECIO") {
          //                return a.price - b.price;
          //               }
          //               return 0; 
          //             });
          //             return {
          //               ...state,
          //               Bebidas:
          //                 action.payload === "Filtro" ? state.Bebidas : orderedBebidas
          //             };      










      case FILTER_BY_TAG:
        const Entradas = state.Entradas;
        // const EntradasAux = state.Entradas;
        const tagFiltered =
          action.payload === "type"
            ? Entradas
            : Entradas.filter((e) => e.tags.description.includes(action.payload));
        return {
          ...state,
          EntradasFiltrado: tagFiltered,
        };
        








      case CREATE_USER:
        return {
          ...state,
        };
      case GET_USER_LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          email: action.payload.email,
          password: action.payload.password,
          userId: action.payload.id,
        };

      case GET_DETAILS:
          return{
            ...state,
            detail: action.payload,
          };
      
      case POST_CRITIC:
            return{
              ...state
            }    
      case GET_AVAILABLE_TABLES:
        return{
            ...state,
            tables: action.payload
        };
      default:
        return state;
    }

       
  }
  
  export default rootReducer;