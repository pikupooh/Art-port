import { FETCH_POST_DATA } from "./actionTypes";

export const fetchPostDatatAction = (postData) => {
  return {
    type: FETCH_POST_DATA,
    payload: {
      postData,
    },
  };
};
