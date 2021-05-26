import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import deletePostLike from "../../../redux/thunk/delete/deletePostLike";
import postPostLike from "../../../redux/thunk/post/postPostLike";
import fetchUserData from "../../../redux/thunk/fetchUserData"
class PostLikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }

    componentDidMount() {
        this.props.fetchUserData(this.props.userId)
    }

    trimUser = () => {
        var temp = {
            ...this.props.user,
        };

        delete temp.about;
        delete temp.email;
        delete temp.dob;

        return temp;
    };

    updateButtonState = () => {
        var foundUser = this.props.likes.filter(
            (user) => user.userId === this.props.userId
        );

        if (foundUser.length !== 0) {
            return true
        } else {
            return false
        }
    };

    postLiked = () => {
        if (this.props.userId === null) {
            this.props.showSignInModal();
            return;
        }

        this.setState({
            liked: true,
        });

        this.props.postPostLike(this.trimUser(), this.props.postId);
    };

    removeLiked = () => {
        this.props.deletePostLike(this.props.userId, this.props.postId);
        this.setState({
            liked: false,
        });
    };

    render() {
        if (this.updateButtonState() === false) {
            return (
                <Button onClick={this.postLiked}>
                        <div className = "like_button">
                        Like
                        <div className="material-icons ml-1">
                            thumb_up_off_alt
                        </div>
                    </div>
                </Button>
            );
        } else {
            return (
                <Button onClick={this.removeLiked}>
                    <div className = "like_button">
                        Unlike
                        <div className="material-icons ml-1">
                            thumb_down_off_alt
                        </div>
                    </div>
                </Button>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
            deletePostLike: deletePostLike,
            postPostLike: postPostLike,
            fetchUserData: fetchUserData
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        likes: state.post.likes,
        user: state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLikeButton);
