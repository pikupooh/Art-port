import * as ActionTypes from '../actions/actionTypes'

const initState = {
    userId: "607593dfd20d7954a45a502e",
    userPhoto: "",
}

export const userReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_USER_INFO:
            return {
                ...state,
            }
        default:
            return state
    }
}
