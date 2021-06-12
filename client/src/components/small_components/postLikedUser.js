import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FollowButton from "./followButton";

function PostLikedUser(props) {
    return (
        <div className="m-4">
            <Row>
                <Col xs={2}>
                    <Link to={"/user/" + props.like.id}>
                        <Image
                            src={props.like.profilePhoto.link}
                            roundedCircle
                            className="post_profile_photo"
                        ></Image>
                    </Link>
                </Col>
                <Col className="my-auto likes_modal_username" xs={5}>
                    <Link to={"/user/" + props.like.id}>
                        <span className="username">{props.like.username}</span>
                    </Link>
                </Col>
                <Col className="my-auto ml-auto">
                    <div className="likes_modal_follow_button">
                        <FollowButton userId={props.like.id} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PostLikedUser;
