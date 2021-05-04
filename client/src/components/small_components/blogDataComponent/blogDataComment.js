import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BlogDataComment(props){
    return(
        <div className = "m-5">
            <Row>
                <Link to = {'/user/' + props.comment.User.UserId}>
                    <Col xs = {2}>
                        <Image src = {props.comment.User.ProfilePhoto} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </Link>
                <Col>
                <Link to = {'/user/' + props.comment.User.UserId}>
                    <Row className = "username">
                        {props.comment.User.Username}
                    </Row>
                </Link>
                    <Row>
                        {props.comment.Text}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default BlogDataComment