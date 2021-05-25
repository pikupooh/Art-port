import * as ActionTypes from '../actions/actionTypes'

const initState = {
    postList: [],
    tempList: [],
}

export const homeGridReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_POST_LIST:
            return {
                ...state,
                postList: action.payload.postList,
                tempList: action.payload.postList
            }

        case ActionTypes.CHANGE_POST_LAYOUT:
            var newPostList = state.postList.filter((post) => {
                var flag = false
                post.category.forEach(element => {
                    if(element === action.payload){
                        flag = true
                        return        
                    }
                });
                
                return flag
            })

            return {
                ...state,
                tempList: newPostList
            }

        case ActionTypes.RESET_CATEGORY:
            return{
                ...state,
                tempList: state.postList
            }

        default:
            return state
    }
}
