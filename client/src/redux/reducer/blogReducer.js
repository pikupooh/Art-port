import * as ActionTypes from '../actions/actionTypes'

const initState = {
    blogList : [],
    carouselBlogList: [],
}

export const blogReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_BLOG_LIST:
            return {
                ...state,
                blogList: action.payload.blogList,
                carouselBlogList: action.payload.blogList.slice(0, 3)
            }
        default:
            return state;
    }
}
