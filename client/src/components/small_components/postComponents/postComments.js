import React from "react"

import PostComment from "./postComment"

class PostComments extends React.Component{
    
    render(){
        console.log(this.props.comments);
        if(this.props.comments.length === 0){
            return(
                <div>
                    No Comments
                </div>
            )
        }
        return(
            <div>
                {this.props.comments.map((comment) => 
                    <div key = {comment.id}>
                        <PostComment comment = {comment}/>
                    </div>
                )}
            </div>
        )
    }
}

export default PostComments