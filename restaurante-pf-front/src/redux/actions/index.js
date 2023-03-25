import { GET_AVAILABLE_TABLES } from './actionTypes.js';
import axios from 'axios';

export const getTables = (body) => {
    return async(dispatch) => {
        try {
            const availableTables = (await axios.get('https://pfhenryback-production.up.railway.app/tables/', { data: body })).data
            dispatch({type: GET_AVAILABLE_TABLES, payload: availableTables})
        } catch (error) {
            console.log(error.response.data.error)
        }
    };
};