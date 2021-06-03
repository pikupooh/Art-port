import * as ActionTypes from "../actions/actionTypes";

export const registerReducer = (
    state = {
        isLoading: false,
        isSignedUp: false,
        errmess: "",
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSignedUp: false,
                errmess: "",
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedUp: true,
                errmess: "",
            };
        case ActionTypes.SIGNUP_FAILURE:
          
            return {
                ...state,
                isLoading: false,
                isSignedUp: false,
                errmess: action.message,
            };
        default:
            return state;
    }
};
