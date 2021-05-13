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
            console.log("fetchprofiledata", action.payload.profileData);
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
            console.log(action.payload)
            return {
                ...state,
                userMangas: [...state.userMangas, action.payload],
            };
        case ActionTypes.ADD_COMIC:
            return {
                ...state,
                userComics: [...state.userComics, action.payload],
            };
        case ActionTypes.DELETE_POST:
            let updatedPosts = state.userPosts.filter((post) => post.id !== action.payload)
            return {
                ...state,
                userPosts: updatedPosts,
            };
        case ActionTypes.DELETE_MANGA:
            let updatedMangas = state.userMangas.filter((manga) => manga.id !== action.payload)
            return {
                ...state,
                userMangas: updatedMangas,
            };
        case ActionTypes.DELETE_COMIC:
            let updatedComics = state.userComics.filter((comic) => comic.id !== action.payload)
            return {
                ...state,
                userComics: updatedComics,
            };
        case ActionTypes.DELETE_BLOG:
            let updatedBlogs = state.userBlogs.filter((blog) => blog.id !== action.payload)
            return {
                ...state,
                userBlogs: updatedBlogs,
            };
        default:
            return state;
    }
};
