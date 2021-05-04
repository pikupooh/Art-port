import { StarFill } from 'react-bootstrap-icons'
import { Row, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Fragment } from 'react'

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
                    {props.manga.author.map((user) => 
                        <Link to = {'/user/' + user.UserId} className = "manga_list_manga_data_authors">
                            {user.firstname} {user.lastname + ' '}
                        </Link>
                    )}
                </Row>
            </div>
        </Container>
    )
}

export default MangaListMangaData