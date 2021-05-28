import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image } from "react-bootstrap";

import FollowButton from "../small_components/followButton"
import fetchUserData from "../../redux/thunk/fetchUserData";
import UserProfileNavbar from "../small_components/userProfileComponents/userProfileNavbar";
import UserProfileExtras from "../small_components/userProfileComponents/userProfileExtras";
import fetchProfileData, {fetchUserProfileData} from "../../redux/thunk/fetchProfileData";

class UserProfile extends React.Component {
    componentDidMount() {
        let lastSlash = this.props.location.pathname.lastIndexOf("/");

        let id = lastSlash==5?this.props.location.pathname.slice(6):this.props.location.pathname.slice(6, lastSlash);
        this.props.fetchProfileData(id);
        this.props.fetchUserData(id);
        this.props.fetchUserProfileData();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="text-center profile_page_header">
                    <div className="text-center profile_photo">
                        <Image
                            src={this.props.user.profilePhoto.link}
                            roundedCircle
                            className="profile_page_photo"
                        ></Image>
                    </div>
                    <div className="profile_page_full_name">
                        <div>
                            {this.props.user.firstName}{" "}
                            {this.props.user.lastName}
                        </div>
                    </div>
                    <div className="profile_page_email">
                        <div>Contact: {this.props.user.email}</div>
                    </div>
                    <div>{this.props.user.about}</div>   
                    <FollowButton userId = {this.props.id} />
                </div>
                <UserProfileNavbar match={this.props.match} />
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchUserData: fetchUserData,
            fetchProfileData: fetchProfileData,
            fetchUserProfileData
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        user: state.user,
        id: state.profile.id,
        userPosts: state.profile.userPosts,
        userBlogs: state.profile.userBlogs,
        userComics: state.profile.userComics,
        userMangas: state.profile.userMangas,
        followers: state.profile.followers,
        following: state.profile.following,
        favouritePosts: state.profile.favouritePosts,
        favouriteBlogs: state.profile.favouriteBlogs,
        favouriteComics: state.profile.favouriteComics,
        favouriteMangas: state.profile.favouriteMangas,
        profile: state.auth.profile
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
