import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { homeGridReducer } from "./homeGridReducer";
import { PostReducer } from "./postReducer";
import { blogReducer } from "./blogReducer";
import { blogDataReducer } from "./blogDataReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  grid: homeGridReducer,
  post: PostReducer,
  blog: blogReducer,
  blogData : blogDataReducer, 
});
