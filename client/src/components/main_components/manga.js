import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

import fetchMangaListAction from '../../redux/thunk/fetchMangaList'
import MangaDataComponent from '../small_components/mangaListComponent/mangaDataComponent'
class Manga extends React.Component{
    componentDidMount() {
        this.props.fetchMangaList()
    }
    render(){
        return(
            <div className = "container-fluid m-3">
                <Row>
                    {this.props.mangaList.map((manga) => 
                        <Col sm = {6} xl = {4} key ={manga.id} className = "manga_list_manga">
                            <Link to = {'/mangas/' + manga.id}>
                                <MangaDataComponent manga = {manga} />
                            </Link>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
 
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchMangaList: fetchMangaListAction
}, dispatch)

const mapStateToProps=(state) => {
    return {
        mangaList :state.manga.mangaList,
    }
}


export default connect ( mapStateToProps,mapDispatchToProps)(Manga)