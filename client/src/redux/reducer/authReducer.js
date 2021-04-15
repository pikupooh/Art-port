import * as ActionTypes from '../actions/actionTypes'

const initState = {
    userId: "607593dfd20d7954a45a502e",
    isAuthenticated: false,
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            };
        
        default:
            return state
    }
}
