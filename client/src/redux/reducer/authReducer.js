import * as ActionTypes from '../actions/actionTypes'

const initState = {
    userId: "607593dfd20d7954a45a502e",
    isAuthenticated: localStorage.getItem("isAuthenticated") ? true : false
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
            };
        case ActionTypes.LOGIN_SUCCESS:
            localStorage.setItem("isAuthenticated", true);
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated")
            };
        case ActionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem("isAuthenticated")
            return {
                ...state,
                isAuthenticated: false,
            };
        
        default:
            return state
    }
}
