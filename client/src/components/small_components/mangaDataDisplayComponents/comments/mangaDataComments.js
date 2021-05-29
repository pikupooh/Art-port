import MangaDataComment from './mangaDataComment'
import MangaCommentSection from './mangaCommentSection'
import { Component } from 'react';
import CommentsTag from '../../commentsTag'

class MangaDataComments extends Component{

    
    render(){
        console.log(this.props);
        if(this.props.comments.length === 0){
        return(
            <div>
                <CommentsTag length = {this.props.comments.length} />
                <div className = "blog_data_comments">
                    Be the first to comment
                    <MangaCommentSection mangaId = {this.props.mangaId}/>
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
                            <MangaDataComment comment = {comment} />
                            
                        </div>
                    )}     
                </div>
                <div > <MangaCommentSection mangaId = {this.props.mangaId}/></div>
            </div>
        )
    }}
}

export default MangaDataComments