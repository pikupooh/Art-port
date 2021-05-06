import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <Col lg = {4} xl = {3} >
                        <Link to = {'/user/' + this.props.info.user.id}>
                            <Image fluid className = "post_profile_photo" src = {this.props.info.user.profilePhoto.link} roundedCircle></Image>
                        </Link>
                    </Col>
                    <Col className = "text-left ml-1">
                        <Link to = {'/user/' + this.props.info.user.id}>
                            <Row className = "username">
                                {this.props.info.user.username}
                            </Row>
                        </Link>
                        {/* <Row>
                            {this.props.info.user.about}
                        </Row> */}
                    </Col>
                </Row>
                <Row >
                    <Col md = {6} className = "mt-3">
                        <Button>Follow</Button>
                    </Col>
                    <Col>
                        <Button className = "mt-3">
                            Like
                        </Button>
                    </Col>
                </Row>
                <p onClick = {this.showLikesModal}
                    className = "mt-3"
                    >Likes {this.props.info.likes.length}</p>
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
                    Comments {this.props.info.comments.length}
                </div>
                <PostComments comments = {this.props.info.comments}/>
            </div>
            <PostCommentSection />
        </div>
    )}
}

export default PostedUserDetails