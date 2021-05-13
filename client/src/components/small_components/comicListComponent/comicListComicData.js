import { Row,Container } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'

function ComicListComicData(props){
    
    var chapter = ""

    if(props.comic.chapters.length < 2){
        chapter = ' chapter'
    }
    else{
        chapter = ' chapters'
    }
    return(
        <Container className="comic_data_container">
             <Row className="comic_rating" >
            <StarFill className = "my-auto mr-3 manga_list_manga_data_rating_star"/>
                Ratings {props.comic.rating}
            </Row>
            <div className = "comic_chapters_and_genre">
            <Row className= "comic_chapters">
                Chapters:  {props.comic.chapters.length } {chapter}
            </Row>
            <Row>
                Genre:
            </Row> 
            </div> 
        </Container>
    )
}

export default ComicListComicData