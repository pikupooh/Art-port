import { FETCH_PROFILE_DATA, ADD_POST } from "./actionTypes";

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
