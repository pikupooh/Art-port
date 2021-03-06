import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeGridLayout(props) {
    if (props.post.images.length === 0) {
        props.post.images = [
            {
                id: "fail",
                name: "fail",
                link: "https://via.placeholder.com/300/09f/fff.png",
            },
        ];
    }
    return (
        <Link to={"/post/" + props.post.id}>
            <div className="home_grid_posts">
                <div className="home_grid_posts_image_container">
                    <Image
                        src={props.post.images[0].link}
                        className="home_grid_posts_image"
                    />
                </div>
                <div className="home_grid_posts_details_overlay">
                    <Row className="home_grid_posts_details_container">
                        <Col xs={2} className="ml-4 my-auto">
                            <Image
                                roundedCircle
                                src={props.post.user.profilePhoto.link}
                                className="home_grid_posts_details_profile_image"
                            ></Image>
                        </Col>
                        <Col className="home_grid_posts_details_container_username my-auto">
                            <Link to={"/user/" + props.post.user.id}>
                                <div className="username">
                                    {props.post.user.username}
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </Link>
    );
}

export default HomeGridLayout;
