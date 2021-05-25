import React from 'react'
import { Image, Row, Col, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PostComments from './postComments'
import PostLikesModal from '../postLikesModal'
import PostCommentSection from './postCommentSection'
import PostLikeButton from '../likeButtons/postLikeButton'
import FollowButton from '../followButton'
import ShareRow from '../ShareRow'
import CommentsTag from "../../small_components/commentsTag"
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
                            <Link to = {'/user/' + this.props.info.user.userId}>
                                <Image className = "post_profile_photo" src = {this.props.info.user.profilePhoto.link} roundedCircle></Image>
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
                    <Row className = "mt-3">
                        <Col md = {6}>
                            <PostLikeButton postId = {this.props.info.id}/>
                        </Col>
                        <Col>
                            <FollowButton userId = {this.props.info.user.userId}/>
                        </Col>
                    </Row>
                    <p onClick = {this.showLikesModal}
                        className = "mt-3 show_likes_btn"
                        >Likes {this.props.info.likes.length}</p>
                </div>
                
                <div className = "my-4">
                    Posted in {this.props.info.uploadDate}
                </div>
                <div>
                    
                    <div className = "my-2">
                        {this.props.info.title}
                    </div>
                    <div>
                        {this.props.info.description}
                    </div>
                </div>
                <div>
                    Tags
                </div>
                <Row>
                    {this.props.info.tags && this.props.info.tags.map((tag) => 
                        <Badge pill variant="primary" className = "mx-3 mt-2">
                                {tag}
                        </Badge>
                    )}
                </Row>
                <div className = "my-2">
                    <div>
                        Categories
                    </div>
                    <Row>
                        {this.props.info.categories && this.props.info.categories.map((category) => 
                            <Badge pill className = "mx-3 mt-2">
                                {category}
                            </Badge>
                        )}
                    </Row>
                </div>
                <ShareRow />
                <PostCommentSection postId = {this.props.info.id}/>
                <CommentsTag length = {this.props.info.comments.length} />
                <PostComments comments = {this.props.info.comments}/>
            </div>
        )
    }
}

export default PostedUserDetails