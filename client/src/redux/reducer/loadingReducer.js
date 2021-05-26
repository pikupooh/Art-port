import * as ActionTypes from '../actions/actionTypes'

const initState = {
    status : false,
    message : "Loading..."
}

export const loadingReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.SET_LOADING:
            console.log(action.status, action.message)
            return {
                ...state,
                status: action.status,
                message: action.message
            }
        default:
            return state;
    }
}