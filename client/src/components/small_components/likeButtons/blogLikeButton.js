import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import deleteBlogLike from "../../../redux/thunk/delete/deleteBlogLike";
import fetchUserData from "../../../redux/thunk/fetchUserData";
import postBlogLike from "../../../redux/thunk/post/postBlogLike";

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
    }

    trimUser = () => {
        var temp = {
            ...this.props.user,
        };

        temp.id = temp.userId;
        delete temp.userId;

        return temp;
    };

    updateButtonState = () => {
        
        var foundUser = this.props.likes.filter(
            (user) => user.id === this.props.userId
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

        this.props.postBlogLike( this.trimUser(), this.props.blogId);
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
                    <div className="like_button">
                        Like
                        <div className="material-icons ml-1">
                            thumb_up_off_alt
                        </div>
                    </div>
                </Button>
            );
        } else {
            return (
                <Button className="mt-3" onClick={this.removeLiked}>
                    <div className="like_button">
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
