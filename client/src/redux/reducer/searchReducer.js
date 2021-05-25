import * as ActionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    blogs: [],
    mangas: [],
    comics:[]
};

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_RESULT:
            return {
                ...state,
                posts: action.payload.posts,
                blogs: action.payload.blogs,
                mangas: action.payload.mangas,
                comics: action.payload.comics,
            };
        default:
            return state;
    }
};
