import { Col, Image, Row } from 'react-bootstrap'


function PostComment(props){
    return(
        <div className = "m-2">
            <Row>
            <a href = {'/user/' + props.info.User.UserId}>
                    <Col xs = {2}>
                        <Image src = {props.info.User.ProfilePhoto} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </a>
                <Col>
                <a href = {'/user/' + props.info.User.UserId}>
                    <Row>
                        {props.info.User.Username}
                    </Row>
                    </a>
                    <Row>
                        {props.info.Text}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PostComment