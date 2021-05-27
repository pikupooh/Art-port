import { Row, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import StarComponent from '../starComponent'

function MangaListMangaData(props){
    
    return(
        <Container className = "manga-list_manga_data">
            <Row className = "manga_list_manga_data_title">
                {props.manga.title}
            </Row>
            <div className = "manga_list_manga_data_middle_container">
                <StarComponent rating = {props.manga.rating} ratingsCount = {props.manga.ratingCount}/>
                <div className = "my-2">
                    Chapters: {props.manga.chapters.length} 
                </div>
            </div>
            <div className = "manga_list_manga_data_author_container">
                <Row className = "mb-2">
                    Authors
                </Row>
                <Row >
                    <Link to = {'/user/' + props.manga.userDTO.userId} className = "manga_list_manga_data_authors">
                            {props.manga.userDTO.firstName} {props.manga.userDTO.lastName + ' '}
                    </Link>
                </Row>
            </div>
        </Container>
    )
}

export default MangaListMangaData