import * as ActionTypes from '../actions/actionTypes'

const initState = {
    postList: []
}

export const homeGridReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_POST_LIST:
            return {
                ...state,
                postList: action.action.postList
            }
        default:
            return state
    }
}
