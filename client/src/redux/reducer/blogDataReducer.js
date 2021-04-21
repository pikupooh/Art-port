import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: null,
  title: null,
};

export const blogDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BLOG_DATA:
      return {
        ...state,
        id: action.payload.blog.id,
        title: action.payload.blog.title
      };
    default:
      return state;
  }
};