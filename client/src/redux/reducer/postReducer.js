import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: null,
  uploadDate: null,
  likes: [],
  images: [],
  tags: [],
  type: null,
  user: {
    profilePhoto: {}
  },
  categories: [],
  comments: []
};

export const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST_DATA:
      return {
        ...state,
        id: action.payload.postData.id,
        uploadDate: action.payload.postData.uploadDate,
        likes: action.payload.postData.likes,
        images: action.payload.postData.images,
        tags: action.payload.postData.tags,
        type: action.payload.postData.type,
        user: action.payload.postData.user,
        category: action.payload.postData.category,
        comments: action.payload.postData.comments,
      };

    case ActionTypes.LIKE_POST:
        return {
            ...state,
            likes: [...state.likes, action.payload.user],
        };

    case ActionTypes.UNLIKE_POST:
        var newLikes = state.likes.filter(
            (user) => user.userId !== action.payload.userId
        );
        return {
            ...state,
            likes: newLikes,
        };

    default:
      return state;
  }
};
