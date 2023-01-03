import { USERS_FAILED, USERS_REQUEST, USERS_SUCCESS } from "../constants/userConstants"

const initialState = {
    users: [],
    isLoading: false,
    error: null
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case USERS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                users: action.payload
            }
        case USERS_FAILED:
            return {
                isLoading: false,
                error: action.payload,
                users: []
            }
        default:
            return state;
    }
}
export default usersReducer;