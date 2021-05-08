import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: '',
  chapters: [],
  rating:'',
  noOfRating:'',
  title:'',
  about:'',
  type:'',
  coverPhoto: {},
  author: {},
  comments:[],
  uploadDate: '',
  category: [],
};

export const mangaDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MANGA_DATA:
      return {
        ...state,
        id: action.payload.mangaData.id,
        chapters: action.payload.mangaData.chapters,
        rating: action.payload.mangaData.rating,
        noOfRating: action.payload.mangaData.ratingCount,
        title: action.payload.mangaData.title,
        about: action.payload.mangaData.about,
        type: action.payload.mangaData.type,
        coverPhoto: action.payload.mangaData.coverPhoto,
        author : action.payload.mangaData.userDTO,
        comments : action.payload.mangaData.comments,
        uploadDate: action.payload.mangaData.uploadDate,
        category : action.payload.mangaData.category,
      };
    default:
      return state;
  }
};