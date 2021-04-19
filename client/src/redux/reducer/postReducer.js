import * as ActionTypes from "../actions/actionTypes";

const initState = {
  postData: [],
};

export const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST_DATA:
      return {
        ...state,
        postData: action.payload.postData,
      };
    default:
      return state;
  }
};
