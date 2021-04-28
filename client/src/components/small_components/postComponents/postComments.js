import React from "react"

import PostComment from "./postComment"

class PostComments extends React.Component{
    
    render(){
        if(typeof(this.props.comments) === "undefined"){
            return(
                
                <div>
                    Loading
                </div>
            )
        }
        else{
            return(
                <div>
                    {this.props.comments.map((comment) => 
                        <div>
                            <PostComment info = {comment}/>
                        </div>
                    )}
                </div>
            )
        }
    }
}

export default PostComments