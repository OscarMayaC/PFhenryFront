import { GET_AVAILABLE_TABLES } from './actionTypes.js';
import axios from 'axios';

export const getTables = () => {
    return async(dispatch) => {
        const availableTables = await (await axios.get()).data
        dispatch({type: GET_AVAILABLE_TABLES, payload: availableTables})
    };
};