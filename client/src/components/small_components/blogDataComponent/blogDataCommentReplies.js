import { Component } from 'react';
import {Container  } from "react-bootstrap";

import BlogDataCommentsReply from "./blogDataCommentReply"

class BlogDataCommentReplies extends Component{

    render(){
        if(this.props.replies.length === 0 || this.props.showReplies === false){
            return(
                <div>
                    
                </div>
            )
        }

        return(
            <div className = "blog_replies">
                {this.props.replies.map((reply) => 
                    <div  key = {reply.id}>
                        <BlogDataCommentsReply reply = {reply} 
                                               openReplyForm = {this.props.openReplyForm}
                                               showReplies = {this.props.showReplies}
                                               closeReplyForm = {this.props.closeReplyForm}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default BlogDataCommentReplies