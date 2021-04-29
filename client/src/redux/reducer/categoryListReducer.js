import * as ActionTypes from '../actions/actionTypes'

const initState = {
    categoryList: []
}

export const categoryListReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload.categoryList
            }
        default:
            return state
    }
}
