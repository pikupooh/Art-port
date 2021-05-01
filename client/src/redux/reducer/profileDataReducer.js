import * as ActionTypes from '../actions/actionTypes'

const initState = {
    id: "",
    user: {},
    userPosts: [],
    userBlogs: [],
    userMangas: [],
    userComics: [],
    followers: [],
    following: [],
    favouritePosts:[],
    favouriteBlogs:[],
    favouriteMangas:[],
    favouriteComics:[],
}

export const profileDataReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_PROFILE_DATA:
        //console.log(action);
            return {
                ...state,
                id: action.payload.profileData.id,
                user: action.payload.profileData.user,
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
            }
        default:
            return state
    }
}
