import { Component } from 'react';

import PostDataCommentsReply from "./postDataCommentReply"

class PostDataCommentReplies extends Component{

    render(){
        if(this.props.replies.length === 0 || this.props.showReplies === false){
            return(
                <div>
                    
                </div>
            )
        }

        return(
            <div className = "">
                {this.props.replies.map((reply) => 
                    <div  key = {reply.id}>
                        <PostDataCommentsReply reply = {reply} 
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

export default PostDataCommentReplies