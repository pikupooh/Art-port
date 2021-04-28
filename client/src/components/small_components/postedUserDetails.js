import { Image, Row, Col, Button } from 'react-bootstrap'


function PostedUserDetails(props){
    console.log(props);
    return(
        <div className = "post_page_uploader_info">
            <Row>
                <Col xs = {3}>
                    <Image className = "post_profile_photo" src = {props.userInfo.ProfilePhoto} roundedCircle></Image>
                </Col>
                <Col >
                    <Row>
                    {props.userInfo.Username}
                    </Row>
                    <Row>
                    {props.userInfo.about}
                    </Row>
                </Col>
            </Row>
            <Row className = "mt-3 ml-5">
                <Button className = "ml-2 mr-5">Follow</Button>
                <Button>Like</Button>
            </Row>
        </div>
    )
}

export default PostedUserDetails