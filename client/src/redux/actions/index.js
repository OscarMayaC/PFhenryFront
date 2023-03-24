import axios from "axios";

export const GET_DISHES="GET_DISHES";
export const SEARCH_NAME="SEARCH_NAME";
export const GET_TAGS="GET_TAGS";
export const GET_SECTIONS="GET_SECTIONS";
export const SORT="SORT";
export const FILTER_BY_TAG="FILTER_BY_TAG"
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART"

export function carritoAgrego(product){

      return {
        type: "ADD_PRODUCT_CART",
        payload: product,
      }

  }

export function getAllSections() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/sections");
    // console.log(json.data)
    dispatch({
      type: "GET_SECTIONS",
      payload: json.data,
      
    });
  };
  }



export function getAllTags() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/tags");
    // console.log(json.data)
    dispatch({
      type: "GET_TAGS",
      payload: json.data,
      
    });
  };
  }
  // https://pfhenryback-production.up.railway.app/dishes  la ruta para dishes, mismo rutes pero cambia el url principal cambiar cuando se haga primer carga

    export function getAllDishes() {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/dishes");
      dispatch({
        type: "GET_DISHES",
        payload: json.data,
      });
    };
    }
  
    export function Sort(order){
      return {
          type: "SORT",
          payload: order
      }
    }

    export function postDish(payload){
    return async function () {
      const response = await axios.post("http://localhost:3001/dishes" , payload)
      return response;
    }
    }


    export function searchDish(name) {
        return async function (dispatch) {
          try {
            var json = await axios.get("http://localhost:3001/dishes?name=" + name) 
            return dispatch({
              type: "SEARCH_NAME",
              payload: json.data,
            });
          } catch {
            return alert("No se encontró el plato");
          }
        };
      }

      export function filterDishByTag(payload) {
        return {
          type: "FILTER_BY_TAG",
          payload,
        };
      }
      
