import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import deletePostLike from "../../../redux/thunk/delete/deletePostLike";
import postPostLike from "../../../redux/thunk/post/postPostLike";

class PostLikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }

    componentDidMount() {
        setTimeout(() => this.updateButtonState(), 1000);
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

        console.log(foundUser);

        if (foundUser.length !== 0) {
            this.setState({
                liked: true,
            });
        } else {
            this.setState({
                liked: false,
            });
        }
    };

    blogLiked = () => {
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
        this.props.deletePostLike(this.props.user.userId, this.props.postId);
        this.setState({
            liked: false,
        });
    };

    render() {
        if (this.state.liked === false) {
            return (
                <Button className="mt-3" onClick={this.blogLiked}>
                    Like
                </Button>
            );
        } else {
            return (
                <Button className="mt-3" onClick={this.removeLiked}>
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
