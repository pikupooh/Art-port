import { Fragment } from 'react'
import { Row } from 'react-bootstrap'
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
        <Fragment>
            <Row>
                {props.manga.title}
            </Row>
            <Row>
                Ratings {props.manga.rating}
            </Row>
            <Row>
                Authors
            </Row>
                {props.manga.author.map((user) => 
                    <Link to = {'/user/' + user.UserId}>
                        <div> 
                        {user.firstname} {user.lastname + ' '}
                        </div>
                    </Link>
                )}
            <Row>
                {props.manga.chapters.length + chapter} 
            </Row>
            <Row>
                Genre
            </Row>
        </Fragment>
    )
}

export default MangaListMangaData