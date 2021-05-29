import { Row, Col } from 'react-bootstrap'

import ComicListComicImage from './comicListComicImage'
import ComicListComicData from './comicListComicData'


function ComicDataComponent(props){
    return(
            <Row className = "zeropadding" >
                <Col md = {3} className="comic_list_comic_data m-0 zeropadding max_height">
                    <ComicListComicImage image = {props.comic.coverPhoto}/> 
                </Col>
                <Col className= "data_container">
                   <div className ="comic_list_title">{props.comic.title}</div>
                    <ComicListComicData comic = {props.comic} />
                </Col>
            </Row>
    )
}

export default ComicDataComponent