import MangaDataComment from './mangaDataComment'
import MangaCommentSection from './mangaCommentSection'
import { Component } from 'react';


class MangaDataComments extends Component{

    render(){
    if(this.props.comments.length === 0){
        return(
            <div className = "blog_data_comments">
                Be the first to comment
                <MangaCommentSection mangaId = {this.props.mangaId}/>
            </div>
        )
    }
    else{
        return(
            <div>
            <div className = "blog_data_comments">
                {this.props.comments.map((comment) => 
                    <div  key = {comment.id}>
                        <MangaDataComment comment = {comment} />
                        
                    </div>
                )}     
            </div>
             <div > <MangaCommentSection blogId = {this.props.mangaId}/></div>
            </div>
        )
    }}
}

export default MangaDataComments