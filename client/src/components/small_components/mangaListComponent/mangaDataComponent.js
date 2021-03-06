import { Row, Col } from 'react-bootstrap'

import MangaListMangaImage from '../mangaListComponent/mangaListMangaImage'
import MangaListMangaData from '../mangaListComponent/mangaListMangaData'

function MangaDataComponent(props){
    return(
        <div className = " my-2 manga_list_manga_container">
            <Row className = "m-4">
                <Col md = {6} >
                    <MangaListMangaImage imageUrl = {props.manga.coverPhoto}
                    />
                </Col>
                <Col className = "manga_list_manga_data">
                    <MangaListMangaData manga = {props.manga}></MangaListMangaData>
                </Col>
            </Row>
        </div>
    )
}

export default MangaDataComponent