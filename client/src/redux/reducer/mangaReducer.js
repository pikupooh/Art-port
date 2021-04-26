import * as ActionTypes from '../actions/actionTypes'

const initState = {
    mangaList : []
}

export const mangaReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_MANGA_LIST:
            return {
                ...state,
                mangaList: action.payload.mangaList
            }
        default:
            return state;
    }
}