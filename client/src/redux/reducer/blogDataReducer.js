import * as ActionTypes from "../actions/actionTypes";

const initState = {
  blogId: null,
  uploadTime: null,
};

export const blogDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BLOG_DATA:
      return {
        ...state,
        blogId: action.payload.blogData.blogid,
        uploadTime: action.payload.blogData.uploadtime
      };
    default:
      return state;
  }
};