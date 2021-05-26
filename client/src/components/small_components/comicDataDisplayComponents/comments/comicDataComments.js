import { Component } from 'react';

import ComicDataComment from './comicDataComment'
import ComicCommentSection from './comicCommentSection'
import CommentsTag from '../../commentsTag'

class ComicDataComments extends Component{

    render(){
    if( this.props.comments.length === 0){
        return(
              <div>
              <CommentsTag length = {this.props.comments.length} />
            <div className = "blog_data_comments" style ={{padding:"5px" ,justifyContent:"center"}}>
               <p style ={{paddingTop:"5px",paddingLeft:"5px"}}>Be the first to comment</p> 
             </div>
             <div>
                <ComicCommentSection mangaId = {this.props.mangaId}/>
                </div>
            </div>
        )  
    }
    else{
        return(
             <div>
                <CommentsTag length = {this.props.comments.length} />
                <div className = "blog_data_comments">
                {this.props.comments.map((comment) => 
                    <div  key = {comment.id}>
                        <ComicDataComment comment = {comment} />
                        
                    </div>
                )}     
                </div>
             <div > <ComicCommentSection mangaId = {this.props.mangaId}/></div>
            </div>
        )
    }}
}

export default ComicDataComments