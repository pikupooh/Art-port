import BlogDataComment from './blogDataComment'
import BlogCommentSection from './blogCommentSection'
import { Component } from 'react';


class BlogDataComments extends Component{

    render(){
    if(this.props.comments.length === 0){
        return(
            <div className = "blog_data_comments">
                Be the first to comment
                <BlogCommentSection blogId = {this.props.blogId}/>
            </div>
        )
    }
    else{
        console.log(this.props.comments);
        return(
            <div className = "blog_data_comments">
                {this.props.comments.map((comment) => 
                    <div  key = {comment.id}>
                        <BlogDataComment comment = {comment} />
                        
                    </div>
                )}
                <BlogCommentSection blogId = {this.props.blogId}/>
            </div>
        )
    }}
}

export default BlogDataComments