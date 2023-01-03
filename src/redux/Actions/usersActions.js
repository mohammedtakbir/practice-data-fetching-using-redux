import axios from "axios"
import { USERS_FAILED, USERS_REQUEST, USERS_SUCCESS } from "../constants/userConstants"

export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch({
            type: USERS_REQUEST
        })
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: USERS_SUCCESS,
                payload: res.data
            })
        }
        catch (error) {
            dispatch({
                type: USERS_FAILED,
                payload: error
            })
        }
    }
}