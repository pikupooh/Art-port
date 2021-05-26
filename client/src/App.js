import React from "react";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

import NavbarComponent from "./components/main_components/navbarComponent";
import Home from "./components/main_components/home";
import Comics from "./components/main_components/comics";
import Blogs from "./components/main_components/blogs";
import Manga from "./components/main_components/manga";
import About from "./components/main_components/about";
import SignInModal from "./components/sign_in_components/sign_in_modal";
import UserProfile from "./components/main_components/userProfile";
import Post from "./components/main_components/post";
import blogData from "./components/main_components/blogData";
import ComicData from "./components/main_components/comicData";
import MangaData from "./components/main_components/mangaData";
import FooterComponent from "./components/small_components/footerComponent";
import MangaIndividualChapter from "./components/small_components/mangaDataDisplayComponents/mangaIndividualChapter";
import RegistrationForm from "./components/sign_in_components/registrationForm";
import UploadPostForm from "./components/sign_in_components/uploadPostForm";
import UploadBlogForm from "./components/sign_in_components/uploadBlogForm";
import UploadComponent from "./components/main_components/uploadComponent";
import ForgotPassword from "./components/small_components/forgotPassword";
import ResetPassword from "./components/small_components/resetPassword";
import SearchResults from "./components/main_components/searchResults";
import Overlay from "./components/small_components/Overlay"


const NavbarwithRouter = withRouter(NavbarComponent);

class App extends React.Component {
    render() {
        return (
            <div className = "main_wrapper">
                <Overlay className="display-overlay"/>
                <div className = "content_wrapper">
                    <div className="space_for_navbar"></div>
                    <BrowserRouter>
                        <Switch>
                            <>
                                <div>
                                    <NavbarwithRouter />
                                    <Route exact path="/" component={Home} />
                                    <Route path="/comics" component={Comics} />
                                    <Route path="/blogs" component={Blogs} />
                                    <Route path="/manga" component={Manga} />
                                    <Route path="/about" component={About} />
                                    <Route
                                        path="/user/:user_id"
                                        component={UserProfile}
                                    />
                                    <Route
                                        path="/search/:val"
                                        component={SearchResults}
                                    />
                                    <Route path="/post/:post_id" component={Post} />
                                    <Route
                                        path="/blog/:blog_id"
                                        component={blogData}
                                    />
                                    <Route
                                        path="/comic/:comic_id"
                                        component={ComicData}
                                    />
                                    <Route
                                        path="/mangas/:manga_id"
                                        component={MangaData}
                                    />
                                    <Route
                                        path="/chapter/:chapters_id"
                                        component={MangaIndividualChapter}
                                    />
                                    <Route
                                        path="/registration"
                                        component={RegistrationForm}
                                    />
                                    <Route
                                        path="/postuploadform/"
                                        component={UploadPostForm}
                                    />
                                    <Route
                                        path="/bloguploadform/"
                                        component={UploadBlogForm}
                                    />
                                    <Route
                                        path="/forgotPassword"
                                        component={ForgotPassword}
                                    />
                                    <Route
                                        path="/resetPassword"
                                        component={ResetPassword}
                                    />
                                    <Route
                                         path = "/search"
                                         component ={SearchResults}
                                    />      

                                    <SignInModal />
                                    <div className = "footer_head"></div>
                                </div>
                            </>
                        </Switch>
                    </BrowserRouter>
                </div>
                {this.props.isAuthenticated ? <UploadComponent /> : null}
                <FooterComponent /> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, null)(App);
