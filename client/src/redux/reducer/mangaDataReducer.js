import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: '',
  chapters: [],
  rating:'',
  noOfRating:'',
  title:'',
  about:'',
  type:'',
  coverPhoto:'',
};

export const mangaDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MANGA_DATA:
      return {
        ...state,
        id: action.payload.mangaData.id,
        chapters: action.payload.mangaData.chapters,
        rating: action.payload.mangaData.rating,
        noOfRating: action.payload.mangaData.noOfRating,
        title: action.payload.mangaData.title,
        about: action.payload.mangaData.about,
        type: action.payload.mangaData.type,
        coverPhoto: action.payload.mangaData.coverPhoto,
      };
    default:
      return state;
  }
};