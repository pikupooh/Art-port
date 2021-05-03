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
        photoDocument: action.payload.mangaChapter.photoDocument,
        comments :action.payload.mangaChapter.comments,
        chapterNo :action.payload.mangaChapter.chapterNo,
        chapterName :action.payload.mangaChapter.chapterName
      };
    default:
      return state;
  }
};