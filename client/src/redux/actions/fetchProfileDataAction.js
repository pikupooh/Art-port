import { FETCH_PROFILE_DATA, USER_PROFILE_FETCH, ADD_POST, ADD_BLOG, ADD_MANGA, ADD_COMIC, DELETE_POST, DELETE_COMIC, DELETE_MANGA, DELETE_BLOG } from "./actionTypes";

export const fetchProfileDataAction = (profileData) => {
    return {
        type: FETCH_PROFILE_DATA,
        payload: {
            profileData,
        },
    };
};

export const fetchUserProfileAction = (profile) => {
    return {
        type: USER_PROFILE_FETCH,
        payload: profile
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

export const deleteUserPostAction = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const deleteUserMangaAction = (mangaId) => {
    return {
        type: DELETE_MANGA,
        payload: mangaId
    }
}

export const deleteUserComicAction = (comicId) => {
    return {
        type: DELETE_COMIC,
        payload: comicId
    }
}

export const deleteUserBlogAction = (blogId) => {
    return {
        type: DELETE_BLOG,
        payload: blogId
    }
}