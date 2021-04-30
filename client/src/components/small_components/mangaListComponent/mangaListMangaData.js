import { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MangaListMangaData(props){
    console.log(props.manga.author);
    return(
        <Fragment>
            <Row>
                <Link to = {'/mangas/' + props.manga.id}>
                {props.manga.title}
                </Link>
               
            </Row>
            <Row>
                Ratings {props.manga.rating}
            </Row>
            <Row>
                Authors
            </Row>
            <Row>
                {props.manga.author.map((user) => 
                    <div> 
                     {user.firstname} {user.lastname}
                    </div>
                )}
            </Row>
            <Row>
                Number of chapters { props.manga.chapters.length}
            </Row>
            <Row>
                Genre
            </Row>
        </Fragment>
    )
}

export default MangaListMangaData