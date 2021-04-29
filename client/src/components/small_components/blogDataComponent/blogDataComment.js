import { Image, Row, Col } from 'react-bootstrap'


function BlogDataComment(props){
    return(
        <div className = "m-5">
            <Row>
            <a href = {'http://localhost:3000/artist/' + props.comment.User.UserId}>
                    <Col xs = {2}>
                        <Image src = {props.comment.User.ProfilePhoto} roundedCircle className = "comment_profile_photo"></Image>
                    </Col>
                </a>
                <Col>
                <a href = {'http://localhost:3000/artist/' + props.comment.User.UserId}>
                    <Row>
                        {props.comment.User.Username}
                    </Row>
                    </a>
                    <Row>
                        {props.comment.Text}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default BlogDataComment