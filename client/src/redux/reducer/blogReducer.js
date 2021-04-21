import * as ActionTypes from '../actions/actionTypes'

const initState = {
    blogList : []
}

export const blogReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_BLOG_LIST:
            return {
                ...state,
                blogList: action.payload.blogList
            }
        default:
            return state;
    }
}
