import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: '',
  title: '',
  description: '',
  content: '',
  likes: [],
  comments: [],
  img: {},
  uploadTime: '',
  tags: [],
  user: {
    profilePhoto: {}
  },
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
        img: action.payload.blog.img,
        uploadDate: action.payload.blog.uploadDate,
        tags: action.payload.blog.category,
        user: action.payload.blog.user
      };
    default:
      return state;
  }
};