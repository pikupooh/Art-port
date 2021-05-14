import BlogDataComment from './blogDataComment'
import BlogCommentSection from './blogCommentSection'
import { Component } from 'react';


class BlogDataComments extends Component{

    render(){
    if(this.props.comments.length === 0){
        return(
            <div>
            <div className = "blog_data_comments" style ={{padding:"5px" ,justifyContent:"center"}}>
               <p style ={{paddingTop:"5px",paddingLeft:"2px"}}>Be the first to comment</p> 
             </div>
             <div>
                <BlogCommentSection blogId = {this.props.blogId}/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
            <div className = "blog_data_comments">
                {this.props.comments.map((comment) => 
                    <div  key = {comment.id}>
                        <BlogDataComment comment = {comment} />
                        
                    </div>
                )}     
            </div>
             <div > <BlogCommentSection blogId = {this.props.blogId}/></div>
            </div>
           
         
     
           
        )
    }}
}

export default BlogDataComments