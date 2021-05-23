import { Component } from 'react';

import ChapterDataCommentsReply from "./chapterDataCommentReply"

class ChapterDataCommentReplies extends Component{

    render(){
        if(this.props.replies.length === 0 || this.props.showReplies === false){
            return(
                <div>
                    
                </div>
            )
        }

        return(
            <div className = "blog_data_comments">
                {this.props.replies.map((reply) => 
                    <div  key = {reply.id}>
                        <ChapterDataCommentsReply reply = {reply} 
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

export default ChapterDataCommentReplies