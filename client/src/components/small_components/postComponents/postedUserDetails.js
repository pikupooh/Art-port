import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PostComments from './postComments'
import PostLikesModal from '../postLikesModal'
import PostCommentSection from './postCommentSection'
import PostLikeButton from '../likeButtons/postLikeButton'
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
        console.log(this.props);
        return(
            <div>
                <PostLikesModal show = {this.state.showLikesModal} 
                                hideLikesModal = {this.hideLikesModal}
                                likes = {this.props.info.likes}/>
                <div className = "post_page_uploader_info">
                    <Row>
                        <Col lg = {4} xl = {3} >
                            <Link to = {'/user/' + this.props.info.user.userId}>
                                <Image fluid className = "post_profile_photo" src = {this.props.info.user.profilePhoto.link} roundedCircle></Image>
                            </Link>
                        </Col>
                        <Col className = "text-left ml-1 my-auto">
                            <Link to = {'/user/' + this.props.info.user.userId}>
                                <span className = "username">
                                    {this.props.info.user.username}
                                </span>
                            </Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col md = {6} className = "mt-3">
                            <Button>Follow</Button>
                        </Col>
                        <Col>
                            <PostLikeButton postId = {this.props.info.id}/>
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
                    <div className = "my-2">
                        {this.props.info.title}
                    </div>
                    <div>
                        {this.props.info.description}
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
                <PostCommentSection postId = {this.props.info.id}/>
                <div>
                    <div>
                        Comments {this.props.info.comments.length}
                    </div>
                    <PostComments comments = {this.props.info.comments}/>
                </div>
            </div>
        )
    }
}

export default PostedUserDetails