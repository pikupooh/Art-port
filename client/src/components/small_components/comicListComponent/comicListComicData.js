import { Container } from 'react-bootstrap'
import StarComponent from '../starComponent'

function ComicListComicData(props){
    return(
        
        <Container className=" zeropadding">
            <StarComponent rating = {props.comic.rating} ratingsCount = {props.comic.ratingCount}/>
            <div className = "comic_chapters_and_genre">
            <div className= "">
                Number of chapters:  {props.comic.chapters.length }
            </div>
            </div> 
        </Container>
    )
}

export default ComicListComicData