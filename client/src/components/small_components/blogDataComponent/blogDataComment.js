import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReplyFill } from 'react-bootstrap-icons'
import { Component } from 'react'

import BlogDataCommentReplies from './blogDataCommentReplies'
import BlogCommentReplyForm from './blogCommentReplyForm'

class BlogDataComment extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isReply: false,
            replyToUser: null,
            showReplies: false
        }
    }

    openReplyForm = (username = this.props.comment.user.username) => {
        console.log(username);
        this.setState({
            isReply: true,
            replyToUser: username
        })
    }

    closeReplyForm = () => {
        this.setState({
            isReply: false,
            replyToUser: null
        })
    }

    toggleShowReplies = () => {
        this.setState({
            showReplies: !this.state.showReplies
        })
    }

    render(){
        return(
            <div className = "mx-3 my-2">
                <Row>
                    <Link to = {'/user/' + this.props.comment.user.userid}>
                        <Col xs = {2}>
                            <Image src = {this.props.comment.user.profilePhoto.link} roundedCircle className = "comment_profile_photo"></Image>
                        </Col>
                    </Link>
                    <Col>
                    <Link to = {'/user/' + this.props.comment.user.userId}>
                        <Row>
                            <div className = "username">
                                {this.props.comment.user.username}
                            </div>
                        </Row>
                    </Link>
                        <Row>
                            {this.props.comment.content}
                        </Row>
                        <Row>
                            <div className = "blog_comment_reply" onClick = {() => this.openReplyForm()}>
                                <ReplyFill></ReplyFill> 
                                Reply
                            </div>
                            <ShowHideRepliesButton showReplies = {this.state.showReplies} toggleShowReplies = {this.toggleShowReplies} repliesLength = {this.props.comment.replies.length}/>
                            <CloseReplyFormButton isReply = {this.state.isReply} closeReplyForm = {this.closeReplyForm} />
                        </Row>
                    </Col>
                </Row>
                <BlogDataCommentReplies replies = {this.props.comment.replies}
                                        openReplyForm = {this.openReplyForm}
                                        showReplies = {this.state.showReplies}
                />
                <BlogCommentReplyForm isReply = {this.state.isReply} 
                                    replyToUser = {this.state.replyToUser}
                                    parentCommentId = {this.props.comment.id}
                                      />
            </div>
        )
    }
}

export default BlogDataComment

function CloseReplyFormButton (props) {

    if(props.isReply === true){
        return(
            <p onClick = {() => props.closeReplyForm()} className = "ml-3">
                Cancel Reply
            </p>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}

function ShowHideRepliesButton(props) {

    if(props.showReplies === true){
        return(
            <p onClick = {() => props.toggleShowReplies()} className = "ml-3">
                Hide Replies
            </p>
        )
    }
    else{
        return(
            <p onClick = {() => props.toggleShowReplies()} className = "ml-3">
                Show Replies ({props.repliesLength})
            </p>
        )
    }
}