import React from "react"

import PostComment from "./postComment"

class PostComments extends React.Component{
    
    render(){
        if( !! this.props.comments || this.props.comments.length === 0){
            return(
                <div>
                    Be the first to comment
                </div>
            )
        }
        return(
            <div>
                <div className = "post_data_comments">
                    {this.props.comments.map((comment) => 
                        <div  key = {comment.id}>
                            <PostComment comment = {comment} />
                            
                        </div>
                    )}     
                </div>
            </div>
        )
    }
}

export default PostComments