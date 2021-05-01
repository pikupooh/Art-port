import { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ComicListComicData(props){
    
    var chapter = ""

    if(props.comic.chapters.length < 2){
        chapter = ' chapter'
    }
    else{
        chapter = ' chapters'
    }

    return(
        <Fragment>
            <Row>
                {props.comic.title}
            </Row>
            <Row>
                Ratings {props.comic.rating}
            </Row>
            <Row>
                Authors
            </Row>
                {props.comic.author.map((user) => 
                    <Link to = {'/user/' + user.UserId}>
                        <div> 
                        {user.firstname} {user.lastname + ' '}
                        </div>
                    </Link>
                )}
            <Row>
                {props.comic.chapters.length + chapter} 
            </Row>
            <Row>
                Genre
            </Row>
        </Fragment>
    )
}

export default ComicListComicData