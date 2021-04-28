import React from 'react'
import { Image, Row, Col, Button, Form } from 'react-bootstrap'


import PostComments from './postComments'
import PostLikesModal from './postLikesModal'

class PostedUserDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showLikesModal: false,
        };
    }

    showLikesModal = () => {
        this.setState({
            showLikesModal: true,
        })
    }

    hideLikesModal = () => {
        this.setState({
            showLikesModal: false,
        })
    }

    render(){
    return(
        <div>
            <PostLikesModal show = {this.state.showLikesModal} 
                            hideLikesModal = {this.hideLikesModal}
                            likes = {this.props.info.likes}/>
            <div className = "post_page_uploader_info">
                <Row>
                    <Col xs = {3}>
                        <a href = {'http://localhost:3000/artist/' + this.props.info.userInfo.UserId}>
                            <Image className = "post_profile_photo" src = {this.props.info.userInfo.ProfilePhoto} roundedCircle></Image>
                        </a>
                    </Col>
                    <Col>
                        <a href = {'http://localhost:3000/artist/' + this.props.info.userInfo.UserId}>
                            <Row>
                                {this.props.info.userInfo.Username}
                            </Row>
                        </a>
                        <Row>
                        {this.props.info.userInfo.about}
                        </Row>
                    </Col>
                </Row>
                <Row className = "my-3 ml-5">
                    <Button className = "ml-2 mr-5">Follow</Button>
                    <Button onClick = {this.showLikesModal}>Likes {this.props.info.likes.length}</Button>
                </Row>
            </div>
            <div className = "my-4">
                Posted in {this.props.info.uploadDate}
            </div>
            <div>
                <div>
                    Tags
                </div>
                <Row>
                    {this.props.info.tags.map((tag) => 
                        <Col>
                            {tag}
                        </Col>
                    )}
                </Row>
            </div>
            <div className = "my-2">
                <div>
                    Categories
                </div>
                {/* <Row>
                    {this.props.info.categories.map((category) => 
                        <Col>
                            {category}
                        </Col>
                    )}
                </Row> */}
            </div>
            <div>
                <div>
                    Comments
                </div>
                <PostComments comments = {this.props.info.comments}/>
                <PostComments comments = {this.props.info.comments} />
            </div>
            <div className = "my-4 post_comment_textarea">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "add_background_color">
                                <Button className = "btn-sm ml-auto">
                                    Comment
                                </Button>
                            </Col>
                            <Col className = "add_background_color">
                                
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>

            </div>
        </div>
    )}
}

export default PostedUserDetails