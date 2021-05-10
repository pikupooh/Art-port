import BlogDataComment from './blogDataComment'
import BlogCommentSection from './blogCommentSection'

function BlogDataComments(props){

    if(props.comments.length === 0){
        return(
            <div className = "blog_data_comments">
                Be the first to comment
                <BlogCommentSection />
            </div>
        )
    }
    else{
        return(
            <div className = "blog_data_comments">
                {props.comments.map((comment) => 
                    <div key = {comment.id} >
                        <BlogDataComment comment = {comment} />
                    </div>
                )}
                <BlogCommentSection />
            </div>
        )
    }
}

export default BlogDataComments