import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: '',
  title: '',
  description: '',
  content: '',
  likes: [],
  comments: [],
  photo: {},
  uploadTime: '',
  tags: [],
  user: {},
};

export const blogDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BLOG_DATA:
      return {
        ...state,
        id: action.payload.blog.id,
        title: action.payload.blog.title,
        description: action.payload.blog.description,
        content: action.payload.blog.content,
        likes: action.payload.blog.likes,
        comments: action.payload.blog.comments,
        photo: action.payload.blog.photo,
        uploadTime: action.payload.blog.uploadTime,
        tags: action.payload.blog.tags,
        user: action.payload.blog.user
      };
    default:
      return state;
  }
};