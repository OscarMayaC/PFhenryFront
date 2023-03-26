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

export function postUsers(payload) {
  return async function (dispatch) {
    let response = await axios.post("http://localhost:3001/users", payload);
    return response;
  };
}

export function getUserByLogin(email, password) {
  return async function (dispatch) {
    let response = await axios.post("http://localhost:3001/users/login", {
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

export function getAllDishes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dishes");
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
    const response = await axios.post("http://localhost:3001/dishes", payload);
    return response;
  };
}

export function searchDish(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/dishes?name=" + name);
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
      let json = await axios.get(`http://localhost:3001/dishes/${id}`);
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
      const json = await axios.post("http://localhost:3001/critics/", payload);
      console.log(json);
      return json;
  }
}

export function filterDishByTag(payload) {
  return {
    type: "FILTER_BY_TAG",
    payload,
  };
}