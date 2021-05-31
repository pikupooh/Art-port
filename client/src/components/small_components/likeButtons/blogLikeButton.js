import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import deleteBlogLike from "../../../redux/thunk/delete/deleteBlogLike";
import fetchUserData from "../../../redux/thunk/fetchUserData";
import postBlogLike from "../../../redux/thunk/post/postBlogLike";
import trimUser from "../../helpers/trimUser";

class BlogLikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }

    componentDidMount() {
        if(this.props.isAuthenticated)
            this.props.fetchUserData(this.props.userId)
        setTimeout(() => {
            this.updateButtonState();
        }, 2000);
    }

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

    blogLiked = () => {

        if (this.props.userId === null) {
            this.props.showSignInModal();
            return;
        }

        this.setState({
            liked: true,
        });

        this.props.postBlogLike(trimUser(this.props.user), this.props.blogId);
    };

    removeLiked = () => {
        this.props.deleteBlogLike(this.props.userId, this.props.blogId);
        this.setState({
            liked: false,
        });
    };

    render() {
        if (this.updateButtonState()=== false) {
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
            deleteBlogLike: deleteBlogLike,
            postBlogLike: postBlogLike,
            fetchUserData: fetchUserData
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        likes: state.blogData.likes,
        user: state.user,
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogLikeButton);
