import * as ActionTypes from "../actions/actionTypes";

const initState = {
    result: {}
};

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_RESULT:
            return {
                ...state,
                result: action.result
            };
        default:
            return state;
    }
};
