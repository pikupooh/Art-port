import * as ActionTypes from '../actions/actionTypes'

const initState = {
    comicList : []
}

export const comicReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_COMIC_LIST:
            return {
                ...state,
                comicList: action.payload.comicList
            }
        default:
            return state;
    }
}