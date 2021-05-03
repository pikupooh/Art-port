import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostComment(props){
    return(
        <div className = "m-2">
            <Row>
            <Link to = {'/user/' + props.info.User.UserId}>
                    <Col xs = {2}>
                        <Image src = {props.info.User.ProfilePhoto} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </Link>
                <Col>
                <Link to = {'/user/' + props.info.User.UserId}>
                    <Row>
                        {props.info.User.Username}
                    </Row>
                    </Link>
                    <Row>
                        {props.info.Text}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PostComment