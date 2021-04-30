import React from 'react'
import SearchBar from '../small_components/search_bar'
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
        console.log(this.props.mangaList);
        return(
            <div className = "container-fluid">
                <Row>
                    {this.props.mangaList.map((manga) => 
                        <Col sm = {6} key ={manga.mangaid}>
                            <MangaDataComponent manga = {manga} />
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