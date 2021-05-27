import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FollowButton from './followButton'

function PostLikedUser(props){
    return(
        <div className = "m-4">
            <Row>
                <Col xs = {2}>
                    <Link to = { '/user/' + props.like.userId}>
                        <Image src = {props.like.profilePhoto.link} roundedCircle className = "post_profile_photo">
                                        
                        </Image>
                    </Link>
                </Col>
                <Col className = "my-auto ">
                    <Link to = { '/user/' + props.like.userId}>
                        <span className = "username"> 
                            {props.like.username}
                        </span>
                    </Link>
                </Col>
                <Col className = "my-auto">
                    <div className = "ml-5">
                        <FollowButton userId = {props.like.userId} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PostLikedUser;