import * as ActionTypes from '../actions/actionTypes'

const initState = {
    status : false,
    message : "Loading..."
}

export const loadingReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.SET_LOADING:
           
            return {
                ...state,
                status: action.status,
                message: action.message
            }
        default:
            return state;
    }
}