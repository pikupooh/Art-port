import { Component } from 'react';

import ComicDataCommentsReply from "./comicDataCommentReply"

class ComicDataCommentReplies extends Component{

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
                        <ComicDataCommentsReply reply = {reply} 
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

export default ComicDataCommentReplies