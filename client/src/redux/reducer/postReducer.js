import * as ActionTypes from "../actions/actionTypes";

const initState = {
  postId: null,
  uploadDate: null,
};

export const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST_DATA:
      return {
        ...state,
        postId: action.payload.postData.postid,
        uploadDate: action.payload.postData.uploaddate
      };
    default:
      return state;
  }
};
