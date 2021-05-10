import { StarFill } from 'react-bootstrap-icons'
import { Row, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MangaListMangaData(props){
    
    var chapter = ""

    if(props.manga.chapters.length < 2){
        chapter = ' chapter'
    }
    else{
        chapter = ' chapters'
    }
    return(
        <Container className = "manga-list_manga_data">
            <Row className = "manga_list_manga_data_title">
                {props.manga.title}
            </Row>
            <div className = "manga_list_manga_data_middle_container">
                <Row className = "manga_list_manga_data_rating">
                    <StarFill className = "my-auto mr-3 manga_list_manga_data_rating_star"/>
                    {props.manga.rating + '  stars'}
                </Row>
                <Row>
                    {props.manga.chapters.length + chapter} 
                </Row>
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