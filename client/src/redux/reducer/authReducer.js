import * as ActionTypes from "../actions/actionTypes";

const initState = {
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token") ? true : false,
    profilePhoto: localStorage.getItem("profilePhoto"),
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            console.log(action.profilePhoto, action.userId);
            return {
                ...state,
                isAuthenticated: true,
                userId: action.userId,
                token: action.token,
                profilePhoto: action.profilePhoto,
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
