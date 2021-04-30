import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'


import PostComments from './postComments'
import PostLikesModal from '../postLikesModal'
import PostCommentSection from './postCommentSection'

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
                        <a href = {'/user/' + this.props.info.userInfo.UserId}>
                            <Image className = "post_profile_photo" src = {this.props.info.userInfo.ProfilePhoto} roundedCircle></Image>
                        </a>
                    </Col>
                    <Col>
                        <a href = {'/user/' + this.props.info.userInfo.UserId}>
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
            <Button>
                Liked this post?
            </Button>
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
            <PostCommentSection />
        </div>
    )}
}

export default PostedUserDetails