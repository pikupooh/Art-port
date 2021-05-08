import * as ActionTypes from "../actions/actionTypes";

const initState = {
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token") ? true : false,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.userId,
                token: action.token,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: true,
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                userId: null,
                token: null,
            };

        default:
            return state;
    }
};
