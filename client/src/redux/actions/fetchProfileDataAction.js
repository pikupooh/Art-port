import { FETCH_PROFILE_DATA, ADD_POST, ADD_BLOG, ADD_MANGA, ADD_COMIC } from "./actionTypes";

export const fetchProfileDataAction = (profileData) => {
    return {
        type: FETCH_PROFILE_DATA,
        payload: {
            profileData,
        },
    };
};

export const addUserPost = (postData) => {
    return {
        type: ADD_POST,
        payload: postData,
    };
};

export const addUserBlog = (blogData) => {
    return {
        type: ADD_BLOG,
        payload: blogData,
    };
};

export const addUserManga = (mangaData) => {
    return {
        type: ADD_MANGA,
        payload: mangaData,
    };
};

export const addUserComic = (comicData) => {
    return {
        type: ADD_COMIC,
        payload: comicData,
    };
};