import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image } from "react-bootstrap";

import fetchUserDataAction from "../../redux/thunk/fetchUserData";
import UserProfileNavbar from "../small_components/userProfileComponents/userProfileNavbar";
import UserProfileExtras from "../small_components/userProfileComponents/userProfileExtras";
import fetchProfileDataAction from "../../redux/thunk/fetchProfileData";
import UploadComponent from "../small_components/uploadComponent";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("mounted");

        this.props.fetchUserData();
        let id = this.props.location.pathname.slice(6);
        this.props.fetchProfileData(id);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="text-center profile_page_header">
                        <div className="text-center profile_photo">
                            <Image
                                src={this.props.user.ProfilePhoto}
                                roundedCircle
                                className="profile_page_photo"
                            ></Image>
                        </div>
                        <div className="profile_page_full_name">
                            <div>
                                {this.props.user.firstname}{" "}
                                {this.props.user.lastname}
                            </div>
                        </div>
                        <div className="profile_page_email">
                            <div>{this.props.user.email}</div>
                        </div>
                        <div>{this.props.user.Username}</div>
                    </div>
                    <UserProfileNavbar match={this.props.match} />
                    <UserProfileExtras match={this.props.match} />
                    <UploadComponent />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchUserData: fetchUserDataAction,
            fetchProfileData: fetchProfileDataAction,
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        dob: state.profile.user.dob,
        id: state.profile.id,
        userPosts: state.profile.userPosts,
        user: state.profile.user,
        userBlogs: state.profile.userBlogs,
        userComics: state.profile.userComics,
        userMangas: state.profile.userMangas,
        followers: state.profile.followers,
        following: state.profile.following,
        favouritePosts: state.profile.favouritePosts,
        favouriteBlogs: state.profile.favouriteBlogs,
        favouriteComics: state.profile.favouriteComics,
        favouriteMangas: state.profile.favouriteMangas,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
