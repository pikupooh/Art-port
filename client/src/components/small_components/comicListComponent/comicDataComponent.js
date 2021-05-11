import { Row, Col } from 'react-bootstrap'

import ComicListComicImage from './comicListComicImage'
import ComicListComicData from './comicListComicData'


function ComicDataComponent(props){
    return(
        <div >
            <Row className = "comic m-2">
            
                <Col md = {4} className="comic_image m-0">
                <div className ="comic_list_title">{props.comic.title}</div>
                    <ComicListComicImage image = {props.comic.coverPhoto}
                    /> 
                </Col>
                <div >
                <ComicListComicData comic = {props.comic} />
                </div>
            </Row>
        </div>
    )
}

export default ComicDataComponent