import { Row, Col } from 'react-bootstrap'

import ComicListComicImage from './comicListComicImage'
import ComicListComicData from './comicListComicData'


function ComicDataComponent(props){
    return(
        <div className = "container-fluid my-2 manga_list_manga_container">
            <Row className = "m-4">
                <Col md = {6} >
                    <ComicListComicImage imageUrl = {props.comic.coverPhoto}
                    />
                </Col>
                <Col>
                    <ComicListComicData comic = {props.comic} />
                </Col>
            </Row>
        </div>
    )
}

export default ComicDataComponent