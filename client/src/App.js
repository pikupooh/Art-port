import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    withRouter,
    Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
import UploadComponent from "./components/main_components/uploadComponent";
import ForgotPassword from "./components/small_components/forgotPassword";
import ResetPassword from "./components/small_components/resetPassword";
import SearchResults from "./components/main_components/searchResults";

import Overlay from "./components/small_components/Overlay";
import SearchedPosts from "./components/small_components/searchComponents/searchedPosts";
import SearchedMangas from "./components/small_components/searchComponents/searchedMangas";
import SearchedComics from "./components/small_components/searchComponents/searchedComics";
import SearchedBlogs from "./components/small_components/searchComponents/searchedBlogs";
import SearchBar from "./components/small_components/search_bar";
import ResetPasswordFailurePage from "./components/small_components/resetPasswordFailurePage";
import ResetPasswordSuccessPage from "./components/small_components/resetPasswordSuccessPage";

import { fetchUserProfileData } from "./redux/thunk/fetchProfileData";
import DeleteModal from "./components/small_components/deleteModal";

const NavbarwithRouter = withRouter(NavbarComponent);
const SearchBarWithRouter = withRouter(SearchBar);

class App extends React.Component {
    componentDidMount() {
        // if(this.props.isAuthenticated)
        this.props.fetchUserProfileData();
    }

    render() {
        return (
            <div className="main_wrapper">
                <Overlay className="display-overlay" />
                <div className="content_wrapper">
                    <div className="space_for_navbar"></div>
                    <BrowserRouter>
                        <Switch>
                            <>
                                <div>
                                    <NavbarwithRouter />
                                    <div className="mobile_screen_search_bar">
                                        <SearchBarWithRouter />
                                    </div>
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
                                        exact
                                        path="/search/"
                                        component={SearchResults}
                                    />
                                    <Route
                                        path="/post/:post_id"
                                        component={Post}
                                    />
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
                                    <Route path="/registration">
                                        {this.props.isAuthenticated ? (
                                            <Redirect to="/" />
                                        ) : (
                                            <RegistrationForm />
                                        )}
                                    </Route>
                                    <Route
                                        path="/forgotPassword"
                                        component={ForgotPassword}
                                    />
                                    <Route
                                        path="/resetPassword"
                                        component={ResetPassword}
                                    />
                                    <Route
                                        path="/searchedposts/"
                                        component={SearchedPosts}
                                    />
                                    <Route
                                        path="/resetsuccess"
                                        component={ResetPasswordSuccessPage}
                                    />
                                    <Route
                                        path="/resetfailure"
                                        component={ResetPasswordFailurePage}
                                    />
                                    <Route
                                        path="/searchedmangas/"
                                        component={SearchedMangas}
                                    />
                                    <Route
                                        path="/searchedblogs/"
                                        component={SearchedBlogs}
                                    />
                                    <Route
                                        path="/searchedcomics/"
                                        component={SearchedComics}
                                    />

                                    <SignInModal />
                                    <DeleteModal />
                                    <div className="footer_head"></div>
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

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchUserProfileData,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);
