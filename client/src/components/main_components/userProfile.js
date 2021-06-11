import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, Button } from "react-bootstrap";

import FollowButton from "../small_components/followButton"
import fetchUserData from "../../redux/thunk/fetchUserData";
import UserProfileNavbar from "../small_components/userProfileComponents/userProfileNavbar";
import fetchProfileData, {fetchUserProfileData} from "../../redux/thunk/fetchProfileData";
import ProfileEditForm from "../small_components/uploadForms/profileEditForm"

class UserProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
    }

    showEditModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideEditModal = () => {
        this.setState({
            showModal: false
        })
    }

    componentDidMount() {

        let lastSlash = this.props.location.pathname.lastIndexOf("/");

        let id = lastSlash===5?this.props.location.pathname.slice(6):this.props.location.pathname.slice(6, lastSlash);
        this.props.fetchProfileData(id);
        this.props.fetchUserData(id);
        this.props.fetchUserProfileData();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <ProfileEditForm show = {this.state.showModal} handleModalClose = {this.hideEditModal} user = {this.props.user}/>
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
                        <div>{this.props.user.username}</div>
                    </div>
                    <div className="profile_page_email">
                        <div>Contact: {this.props.user.email}</div>
                    </div>
                    <div>{this.props.user.about}</div>   
                    <FollowButton userId = {this.props.id} />
                    {this.props.id === this.props.userId && 
                        <div className = "edit_details_icon_container" onClick = {this.showEditModal}>
                        <i class="material-icons edit_details_icon">
                            edit
                        </i>
                        </div>
                    }
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
