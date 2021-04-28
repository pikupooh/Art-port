import * as ActionTypes from "../actions/actionTypes";

const initState = {
  postId: null,
  uploadDate: null,
  likes: [],
  photosDoc: [],
  tags: [],
  type: null,
  userInfo: {},
  categories: []
};

export const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST_DATA:
      return {
        ...state,
        postId: action.payload.postData.PostId,
        uploadDate: action.payload.postData.UploadDate,
        likes: action.payload.postData.Likes,
        photosDoc: action.payload.postData.PhotosDocument,
        tags: action.payload.postData.Tags,
        type: action.payload.postData.Type,
        userInfo: action.payload.postData.User,
        categories: action.payload.postData.categories,
        comments: action.payload.postData.CommentDocument,
      };
    default:
      return state;
  }
};
