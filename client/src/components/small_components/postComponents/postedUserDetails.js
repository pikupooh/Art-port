import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import PostComments from "./postComments";
import PostLikesModal from "../postLikesModal";
import PostCommentSection from "./postCommentSection";
import PostLikeButton from "../likeButtons/postLikeButton";
import FollowButton from "../followButton";
import ShareRow from "../ShareRow";
import CommentsTag from "../../small_components/commentsTag";
import SingleTag from "../../small_components/singleTag";

class PostedUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLikesModal: false,
        };
    }

    showLikesModal = () => {
        this.setState({
            showLikesModal: true,
        });
    };

    hideLikesModal = () => {
        this.setState({
            showLikesModal: false,
        });
    };

    render() {
        return (
            <div>
                <PostLikesModal
                    show={this.state.showLikesModal}
                    hideLikesModal={this.hideLikesModal}
                    likes={this.props.info.likes}
                />
                <div className="post_page_uploader_info">
                    <Row>
                        <Col xs={2} md={1} xl={3}>
                            <Link to={"/user/" + this.props.info.user.id}>
                                <Image
                                    className="post_profile_photo"
                                    src={this.props.info.user.profilePhoto.link}
                                    roundedCircle
                                ></Image>
                            </Link>
                        </Col>
                        <Col className="text-left ml-1 my-auto">
                            <Link to={"/user/" + this.props.info.user.id}>
                                <span className="username">
                                    {this.props.info.user.username}
                                </span>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} sm={3} md={3} lg={2} xl={6}>
                            <PostLikeButton postId={this.props.info.id} />
                        </Col>
                        <Col>
                            <FollowButton userId={this.props.info.user.id} />
                        </Col>
                    </Row>
                    <p
                        onClick={this.showLikesModal}
                        className="mt-3 show_likes_btn"
                    >
                        Likes {this.props.info.likes.length}
                    </p>
                </div>

                <div className="my-4">
                    Posted in {this.props.info.uploadDate}
                </div>
                <div>
                    <div className="my-2 post_title">
                        {this.props.info.title}
                    </div>
                    <div className="post_description">
                        {this.props.info.description}
                    </div>
                </div>
                <Row className="mx-2 tags_text">
                    <i class="material-icons" id="tags">
                        loyalty
                    </i>
                    <span id="tags">Tags</span>
                </Row>
                <Row className="zeromargin">
                    {this.props.info.tags.map((tag) => (
                        <SingleTag tag={tag} />
                    ))}
                </Row>
                <ShareRow />
                <PostCommentSection postId={this.props.info.id} />
                <CommentsTag length={this.props.info.comments.length} />
                <PostComments comments={this.props.info.comments} />
            </div>
        );
    }
}

export default PostedUserDetails;
