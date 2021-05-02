import { Col, Image, Row, Container } from "react-bootstrap";
function MangaChaptersDisplay (props) {
    console.log(props);
    return ( 
        
        <div>
            <div className ="pb-2">
                CHAPTERS:
            </div>
            <div className ="pb-2">
            {props.chapters.map((chapter) => 
                        <div className= "chapters"> 
                        {chapter.chapterName} 
                        </div>
                )}   
            </div>
        </div>
     );
}
 
export default MangaChaptersDisplay