import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import { fetchUserProfileData } from "../../redux/thunk/fetchProfileData";
import addFollower from "../../redux/thunk/post/addFollower";
import unfollowUser from "../../redux/thunk/delete/unfollowUser";
import { withRouter } from "react-router-dom";

class FollowButton extends React.Component {
    componentDidMount() {}

    notFollowed = () => {
        
        if (Object.keys(this.props.profile).length === 0) {
            return true;
        }

        var foundUser = this.props.profile.following.filter(
            (user) => user.id === this.props.userId
        );

        if (foundUser.length !== 0) {
            return false;
        } else {
            return true;
        }
    };

    followUser = () => {

        if (this.props.logInId === null) {
            this.props.showSignInModal();
            return;
        }
        
        this.props.addFollower(this.props.userId, this.props.logInId, this.props.location.pathname);
    }


    unfollowUser = () => {
        this.props.unfollowUser(this.props.userId, this.props.logInId);
    };

    render() {
        if (
            this.props.userId === "" ||
            this.props.userId === this.props.logInId
        ) {
            return <div></div>;
        } else if (this.notFollowed()) {
            return (
                <Button className = "" id = "follow_button" onClick={this.followUser}>
                    Follow
                    {/* <i class="material-icons">
                        person_add
                    </i> */}
                </Button>
            );
        }
        return (
            <Button id="follow_button" onClick={this.unfollowUser}>
                Unfollow
                {/* <i class="material-icons">
                    person_remove
                </i> */}
            </Button>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        logInId: state.auth.userId,
        profile: state.auth.profile,
        user: state.user
    };
};

const mapDipatchToProps = (dispatch) => bindActionCreators({
        fetchUserProfileData,
        addFollower,
        unfollowUser,
        showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
    },dispatch
)

export default withRouter(connect(mapStateToProps, mapDipatchToProps)(FollowButton));
