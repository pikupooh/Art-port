import * as ActionTypes from "../actions/actionTypes";

const initState = {
    id: "",
    userPosts: [],
    userBlogs: [],
    userMangas: [],
    userComics: [],
    followers: [],
    following: [],
    favouritePosts: [],
    favouriteBlogs: [],
    favouriteMangas: [],
    favouriteComics: [],
};

export const profileDataReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROFILE_DATA:
            return {
                ...state,
                id: action.payload.profileData.id,
                userPosts: action.payload.profileData.userPosts,
                userBlogs: action.payload.profileData.userBlogs,
                userComics: action.payload.profileData.userComics,
                userMangas: action.payload.profileData.userMangas,
                followers: action.payload.profileData.followers,
                following: action.payload.profileData.following,
                favouritePosts: action.payload.profileData.favouritePosts,
                favouriteBlogs: action.payload.profileData.favouriteBlogs,
                favouriteComics: action.payload.profileData.favouriteComics,
                favouriteMangas: action.payload.profileData.favouriteMangas,
            };

        case ActionTypes.ADD_POST:
            console.log("reducer", action.payload, state.userPosts);
            return {
                ...state,
                userPosts: [...state.userPosts, action.payload],
            };
        case ActionTypes.ADD_BLOG:
            return {
                ...state,
                userBlogs: [...state.userBlogs, action.payload],
            };
        case ActionTypes.ADD_MANGA:
            return {
                ...state,
                userBlogs: [...state.userMangas, action.payload],
            };
        case ActionTypes.ADD_COMIC:
            return {
                ...state,
                userBlogs: [...state.userComics, action.payload],
            };
        default:
            return state;
    }
};
