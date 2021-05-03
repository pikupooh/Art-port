import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MangaIndividualChapter from "../mangaDataDisplayComponents/mangaIndividualChapter";
function MangaChaptersDisplay (props) {
    return ( 
        <div>
            <div className ="pb-2">
                CHAPTERS:
            </div>
            <div className ="pb-2">
            {props.chapters.map((chapter) => 
            <Link to = {'/chapter/' + chapter.id} key = {chapter.id}>
             <div className= "chapters"> 
                        {chapter.chapterName} 
                        </div>
            </Link>        
                )}   
            </div>
        </div>
     );
}
 
export default MangaChaptersDisplay