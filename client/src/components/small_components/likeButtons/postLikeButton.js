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
        setTimeout(() => {
            this.updateButtonState();
        }, 2000);
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
        console.log(this.props);
        if (this.updateButtonState() === false) {
            return (
                <Button onClick={this.postLiked}>
                    Like
                </Button>
            );
        } else {
            return (
                <Button onClick={this.removeLiked}>
                    Unlike
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
