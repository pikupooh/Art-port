import BlogDataComment from './blogDataComment'
import BlogCommentSection from './blogCommentSection'

function BlogDataComments(props){

    if(props.comments.length === 0){
        return(
            <div></div>
        )
    }
    else{
        return(
            <div>
                {props.comments.map((comment) => 
                    <div key = {comment.CommentId}>
                        <BlogDataComment comment = {comment}/>
                    </div>
                )}
                <BlogCommentSection />
            </div>
        )
    }
}

export default BlogDataComments