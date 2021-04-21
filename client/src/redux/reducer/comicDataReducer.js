import * as ActionTypes from "../actions/actionTypes";

const initState = {
  comicId: null,
  uploadTime: null,
};

export const comicDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMIC_DATA:
      return {
        ...state,
        comicId: action.payload.comicData.comicid,
        uploadTime: action.payload.comicData.uploadtime
      };
    default:
      return state;
  }
};