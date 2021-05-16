import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { homeGridReducer } from "./homeGridReducer";
import { PostReducer } from "./postReducer";
import { blogReducer } from "./blogReducer";
import { blogDataReducer } from "./blogDataReducer";
import { comicReducer } from "./comicReducer";
import { mangaReducer } from "./mangaReducer";
import { comicDataReducer } from "./comicDataReducer";
import { mangaDataReducer } from "./mangaDataReducer";
import { artistUserDataReducer } from "./artistUserDataReducer";
import { categoryListReducer } from "./categoryListReducer";
import { profileDataReducer } from "./profileDataReducer";
import { mangaChapterReducer } from "./mangaChapterReducer";
import { SignInModalReducer } from "./signInModalReducer";
import { registerReducer } from "./registerReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    grid: homeGridReducer,
    post: PostReducer,
    blog: blogReducer,
    blogData: blogDataReducer,
    comic: comicReducer,
    manga: mangaReducer,
    comicData: comicDataReducer,
    mangaData: mangaDataReducer,
    artistUserData: artistUserDataReducer,
    category: categoryListReducer,
    profile: profileDataReducer,
    mangaChapter: mangaChapterReducer,
    signInModal: SignInModalReducer,
    register: registerReducer,
    search: searchReducer
});
