import { Image, Row, Col } from 'react-bootstrap'

function PostLikedModal(props){
    return(
        <div className = "m-4">
            <a href = {"http://localhost:3000/artist/" + props.like.UserId}>
                <Row>
                    <Col xs = {2}>
                        <Image src = {props.like.ProfilePhoto} roundedCircle className = "post_profile_photo">
                                        
                        </Image>
                    </Col>
                <Col className = "my-auto">
                    {props.like.Username}
                </Col>
                </Row>
            </a>
        </div>
    )
}

export default PostLikedModal;