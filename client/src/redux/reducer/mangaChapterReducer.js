import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id : '',
  photoDocument: [],
  comments:[],
  chapterNo : '',
  chapterName : '',
};

export const mangaChapterReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MANGA_CHAPTER:
      return {
        ...state,
        id: action.payload.mangaChapter.id,
        photoDocument: action.payload.mangaChapter.images,
        comments :action.payload.mangaChapter.comments,
        chapterNo :action.payload.mangaChapter.no,
        chapterName :action.payload.mangaChapter.name
      };
    default:
      return state;
  }
};