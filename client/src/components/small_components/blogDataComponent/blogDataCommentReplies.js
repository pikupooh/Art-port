import { Row, Col, Image } from 'react-bootstrap'
import {ReplyFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function BlogDataCommentsReplies(props){

    if(props.replies.length === 0 || props.showReplies === false){
        return(
            <div>
                
            </div>
        )
    }

    return(
        <div className = "ml-5">
            <div className = "ml-5">
                {props.replies.map((reply) => 
                    <div key = {reply.id}>
                    <Row>
                        <Link to = {'/user/' + reply.user.userid}>
                            <Col xs = {2}>
                                <Image src = {reply.user.profilePhoto.link} roundedCircle className = "comment_profile_photo"></Image>
                            </Col>
                        </Link>
                        <Col>
                        <Link to = {'/user/' + reply.user.userId}>
                            <Row>
                                <div className = "username">
                                    {reply.user.username}
                                </div>
                            </Row>
                        </Link>
                            <Row>
                                {reply.content}
                            </Row>
                            <Row>
                                <div className = "blog_comment_reply" onClick = {() => props.openReplyForm(reply.user.username)}>
                                    <ReplyFill></ReplyFill> 
                                    Reply
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogDataCommentsReplies