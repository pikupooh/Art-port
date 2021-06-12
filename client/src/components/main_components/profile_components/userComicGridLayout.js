import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import deleteUserComic from "../../../redux/thunk/deleteUserComic";
import { SHOW_DELETE_MODAL } from "../../../redux/actions/actionTypes";

class UserComicGridLayout extends React.Component {
    deleteComic = () => {
        this.props.deleteUserComic(this.props.userId, this.props.comic.id);
    };

    render() {
        if (this.props.comic.coverPhoto === null) {
            this.props.comic.coverPhoto = {
                id: "fail",
                name: "fail",
                link: "https://via.placeholder.com/300/09f/fff.png",
            };
        }
        return (
            <Link to={"/comic/" + this.props.comic.id}>
                <div className="home_grid_posts">
                    <div className="home_grid_posts_image_container">
                        <Image
                            src={this.props.comic.coverPhoto.link}
                            className="home_grid_posts_image"
                        />
                    </div>
                    <div
                        className="home_grid_posts_details_overlay"
                        id="user_profile_grid"
                    >
                        <Row className="home_grid_posts_details_container">
                            <Col className="home_grid_posts_details_container_username ml-2 my-auto">
                                <Link
                                    to={
                                        "/user/" +
                                        this.props.comic.user.userId +
                                        "/comics"
                                    }
                                >
                                    <DeleteButton
                                        id={this.props.comic.user.userId}
                                        userId={this.props.userId}
                                        deleteComic={this.deleteComic}
                                        showDeleteModal={
                                            this.props.showDeleteModal
                                        }
                                    />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Link>
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
            deleteUserComic: deleteUserComic,
            showDeleteModal: (deleteFunction) =>
                dispatch({
                    type: SHOW_DELETE_MODAL,
                    payload: {
                        message: "Comic",
                        delete: deleteFunction,
                    },
                }),
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComicGridLayout);

function DeleteButton(props) {
    if (props.id === props.userId) {
        return (
            <i
                className="material-icons text-center ml-2"
                onClick={() => props.showDeleteModal(props.deleteComic)}
            >
                delete
            </i>
        );
    } else {
        return <div></div>;
    }
}
