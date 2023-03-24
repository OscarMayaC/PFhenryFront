import axios from "axios"

export function postUsers(payload) {
    return async function(dispatch) {
        let response = await axios.post("http://localhost:3001/users", payload);
        return response
    }
}