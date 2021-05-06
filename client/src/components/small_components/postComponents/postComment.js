import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostComment(props){
    return(
        <div className = "m-2">
            <Row>
            <Link to = {'/user/' + props.info.user.userId}>
                    <Col xs = {2}>
                        <Image src = {props.info.user.profilePhoto} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </Link>
                <Col>
                <Link to = {'/user/' + props.info.user.userId}>
                    <Row className = "username">
                        {props.info.user.username}
                    </Row>
                    </Link>
                    <Row>
                        {props.info.content}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PostComment