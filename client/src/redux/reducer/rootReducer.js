import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { homeGridReducer } from "./homeGridReducer";
import { postReducer } from "./postReducer";
import { blogReducer } from "./blogReducer";
import { blogDataReducer } from "./blogDataReducer";
import { comicReducer } from "./comicReducer";
import { mangaReducer } from "./mangaReducer";
import { comicDataReducer } from "./comicDataReducer";
import { mangaDataReducer } from "./mangaDataReducer";
import { logedInUserData } from "./logedInUserData";
import { categoryListReducer } from "./categoryListReducer";
import { profileDataReducer } from "./profileDataReducer";
import { mangaChapterReducer } from "./mangaChapterReducer";
import { signInModalReducer } from "./signInModalReducer";
import { registerReducer } from "./registerReducer";
import { searchReducer } from "./searchReducer";
import { loadingReducer } from "./loadingReducer";
import { deleteModalReducer } from "./deleteModalReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    grid: homeGridReducer,
    post: postReducer,
    blog: blogReducer,
    blogData: blogDataReducer,
    comic: comicReducer,
    manga: mangaReducer,
    comicData: comicDataReducer,
    mangaData: mangaDataReducer,
    logedInUserData,
    category: categoryListReducer,
    profile: profileDataReducer,
    mangaChapter: mangaChapterReducer,
    signInModal: signInModalReducer,
    register: registerReducer,
    search: searchReducer,
    loading: loadingReducer,
    deleteModal: deleteModalReducer
});
