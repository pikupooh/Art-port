import { Component } from 'react';

import ComicDataComment from './comicDataComment'
import ComicCommentSection from './comicCommentSection'

class ComicDataComments extends Component{

    render(){
    if(this.props.comments.length === 0){
        return(
            <div className = "blog_data_comments">
                Be the first to comment
                <ComicCommentSection mangaId = {this.props.mangaId}/>
            </div>
        )
    }
    else{
        return(
            <div className = "blog_data_comments">
                {this.props.comments.map((comment) => 
                    <div  key = {comment.id}>
                        <ComicDataComment comment = {comment} />
                        
                    </div>
                )}
                <ComicCommentSection mangaId = {this.props.mangaId}/>
            </div>
        )
    }}
}

export default ComicDataComments