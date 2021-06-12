import { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ReplyFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ChapterCommentEditReplyForm from "./chapterCommentEditReplyForm";
import deleteChapterReply from "../../../redux/thunk/delete/deleteChapterReply";

class ChapterDataCommentsReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        };
    }

    openEditReplyForm = () => {
        this.props.closeReplyForm();
        this.setState({
            isEdit: true,
        });
    };

    closeEditReplyForm = () => {
        this.setState({
            isEdit: false,
        });
    };

    deleteReply = () => {
        this.props.deleteChapterReply(
            this.props.reply.id,
            this.props.reply.comment
        );
    };

    render() {
        return (
            <div className="ml-5">
                <div className="ml-5">
                    <Row>
                        <Link to={"/user/" + this.props.reply.user.id}>
                            <Col xs={2}>
                                <Image
                                    src={
                                        this.props.reply.user.profilePhoto.link
                                    }
                                    roundedCircle
                                    className="comment_profile_photo"
                                ></Image>
                            </Col>
                        </Link>
                        <p className="replies">
                            <Col>
                                <Link to={"/user/" + this.props.reply.user.id}>
                                    <Row>
                                        <div>
                                            <span className="user_name">
                                                {this.props.reply.user.username}{" "}
                                                &nbsp;
                                            </span>
                                            replying to{" "}
                                            <span>
                                                {" "}
                                                @{this.props.reply.replyTo}
                                            </span>
                                        </div>
                                    </Row>
                                </Link>
                                <Row>{this.props.reply.content}</Row>
                            </Col>
                        </p>
                    </Row>
                    <Row className="reply_button">
                        <div
                            className="blog_comment_reply"
                            onClick={() =>
                                this.props.openReplyForm(
                                    this.props.reply.user.username
                                )
                            }
                        >
                            <ReplyFill></ReplyFill>
                            Reply
                        </div>
                        <EditButton
                            id={this.props.reply.user.id}
                            userId={this.props.userId}
                            openEditReplyForm={this.openEditReplyForm}
                            closeEditReplyForm={this.closeEditReplyForm}
                            isEdit={this.state.isEdit}
                        />
                        <DeleteButton
                            id={this.props.reply.user.id}
                            userId={this.props.userId}
                            deleteReply={this.deleteReply}
                        />
                    </Row>
                    <ChapterCommentEditReplyForm
                        isEdit={this.state.isEdit}
                        closeEditReplyForm={this.closeEditReplyForm}
                        replyId={this.props.reply.id}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            deleteChapterReply,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChapterDataCommentsReply);

function DeleteButton(props) {
    if (props.id === props.userId) {
        return (
            <i
                className="material-icons text-center ml-2"
                id="delete_button"
                onClick={props.deleteReply}
            >
                delete
            </i>
        );
    } else {
        return <div></div>;
    }
}

function EditButton(props) {
    if (props.id === props.userId && props.isEdit === false) {
        return (
            <i
                className="material-icons text-center ml-2"
                id="edit_button"
                onClick={props.openEditReplyForm}
            >
                edit
            </i>
        );
    } else if (props.isEdit === true) {
        return <span></span>;
    } else {
        return <div></div>;
    }
}
