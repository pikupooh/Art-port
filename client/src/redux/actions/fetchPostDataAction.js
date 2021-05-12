import { FETCH_POST_DATA } from "./actionTypes";

export const fetchPostDataAction = (postData) => {
    return {
        type: FETCH_POST_DATA,
        payload: {
            postData,
        },
    };
};
