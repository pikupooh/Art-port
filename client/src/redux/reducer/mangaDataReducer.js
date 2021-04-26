import * as ActionTypes from "../actions/actionTypes";

const initState = {
  mangaId: null,
  uploadTime: null,
};

export const mangaDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MANGA_DATA:
      return {
        ...state,
        comicId: action.payload.mangaData.mangaid,
        uploadTime: action.payload.mangaData.uploadtime
      };
    default:
      return state;
  }
};