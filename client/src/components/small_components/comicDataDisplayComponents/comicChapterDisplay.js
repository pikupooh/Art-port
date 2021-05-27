import { Link } from "react-router-dom";

function ComicChapterDisplay (props) {
    
    if(props.chapters.length === 0){
        return(
            <div className = "no_chapters">
                No chapters present
            </div>
        )
    }

    return ( 
        <div>
            <div className ="pb-2 manga_data_description_text text-center">
                Chapters
            </div>
            <div className ="pb-2 manga_data_chater_list_container">
            {props.chapters.map((chapter) => 
                <Link to = {'/chapter/' + chapter.id} key = {chapter.id}>
                    <div className = "manga_data_chapter_list_chapter ml-3"> 
                        {chapter.no} {chapter.name} 
                    </div>
                </Link>        
                )}   
            </div>
        </div>
     );
}
 
export default ComicChapterDisplay