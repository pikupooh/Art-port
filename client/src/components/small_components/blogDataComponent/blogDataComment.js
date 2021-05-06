import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BlogDataComment(props){
    return(
        <div className = "m-5">
            <Row>
                <Link to = {'/user/' + props.comment.user.id}>
                    <Col xs = {2}>
                        <Image src = {props.comment.user.profilePhoto.link} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </Link>
                <Col>
                <Link to = {'/user/' + props.comment.user.id}>
                    <Row className = "username">
                        {props.comment.user.username}
                    </Row>
                </Link>
                    <Row>
                        {props.comment.content}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default BlogDataComment