import * as ActionTypes from '../actions/actionTypes'

const initState = {
    following: []
}

export const logedInUserData = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_LOG_IN_USER_DATA:
            return {
                ...state,
            }
        default:
            return state
    }
}
