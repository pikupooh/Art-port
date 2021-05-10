import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostLikedModal(props){
    return(
        <div className = "m-4">
            <Link to = { '/user/' + props.like.userId}>
                <Row>
                    <Col xs = {2}>
                        <Image src = {props.like.profilePhoto.link} roundedCircle className = "post_profile_photo">
                                        
                        </Image>
                    </Col>
                <Col className = "my-auto username">
                    {props.like.username}
                </Col>
                </Row>
            </Link>
        </div>
    )
}

export default PostLikedModal;