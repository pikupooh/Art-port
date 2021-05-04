import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MangaIndividualChapter from "../mangaDataDisplayComponents/mangaIndividualChapter";
function MangaChaptersDisplay (props) {
    return ( 
        <div>
            <div className ="pb-2 manga_data_description_text text-center">
                CHAPTERS:
            </div>
            <div className ="pb-2 manga_data_chater_list_container">
            {props.chapters.map((chapter) => 
            <Link to = {'/chapter/' + chapter.id} key = {chapter.id} key = {chapter.id}>
                <div className = "manga_data_chapter_list_chapter ml-5"> 
                    {chapter.chapterNo} {chapter.chapterName} 
                </div>
            </Link>        
                )}   
            </div>
        </div>
     );
}
 
export default MangaChaptersDisplay