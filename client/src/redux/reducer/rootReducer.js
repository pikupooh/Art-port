import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { homeGridReducer } from "./homeGridReducer";
import { PostReducer } from "./postReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  grid: homeGridReducer,
  post: PostReducer,
});
