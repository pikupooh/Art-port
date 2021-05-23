import ChapterDataComment from './chapterDataComment'
import ChapterCommentSection from './chapterCommentSection'
import { Component } from 'react';


class ChapterDataComments extends Component{
    render(){
        console.log(this.props);
    if(this.props.comments.length === 0){
        return(
            <div>
            <div className = "blog_data_comments" style ={{padding:"5px" ,justifyContent:"center"}}>
               <p style ={{paddingTop:"5px",paddingLeft:"5px"}}>Be the first to comment</p> 
             </div>
             <div>
                <ChapterCommentSection chapterId = {this.props.chapterId} />
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
                        <ChapterDataComment comment = {comment} />
                        
                    </div>
                )}     
            </div>
             <div > <ChapterCommentSection chapterId = {this.props.chapterId}/></div>
            </div>
           
         
     
           
        )
    }}
}

export default ChapterDataComments