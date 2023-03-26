import {
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
    GET_AVAILABLE_TABLES
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
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
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
  
      case SORT:
        let orderedDishes = [...state.allDishes];
        orderedDishes = orderedDishes.sort((a, b) => {
          if (a.name < b.name) {
            return action.payload === "ASCENDENTE" ? -1 : 1;
          }
          if (a.name > b.name) {
            return action.payload === "ASCENDENTE" ? 1 : -1;
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