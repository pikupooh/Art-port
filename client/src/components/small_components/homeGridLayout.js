

import { Col, Image, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeGridLayout(props){
 //  console.log(props.post);
    return(    
        <Link to = {'post/' + props.post.PostId}>
        <div className = "home_grid_posts">
            <div className = "home_grid_posts_image_container">
                        <Image  className="JKL"
                            src = {props.post.PhotosDocument[0].url}
                            className = "home_grid_posts_image">
                        </Image>
            </div>
            <div className = "home_grid_posts_details_overlay">
                <Row className = "home_grid_posts_details_container">
                    <Col xs = {2} className = "ml-4 my-auto">
                        <Image roundedCircle src = {props.post.User.ProfilePhoto} 
                                className = "home_grid_posts_details_profile_image"></Image>
                    </Col>
                    <Col className = "home_grid_posts_details_container_username my-auto">
                        <p>{props.post.User.Username}</p>
                    </Col>
                </Row>
            </div>
        </div>
        </Link>
    )
}

export default HomeGridLayout