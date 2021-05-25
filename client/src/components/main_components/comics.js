import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';

import fetchComicListAction from '../../redux/thunk/fetchComicList '
import ComicDataComponent from '../small_components/comicListComponent/comicDataComponent'
class Comics extends React.Component{

    componentDidMount() {
        this.props.fetchComicList()
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className = "container-fluid">
                <Row className = "comic_conatiner">           
                    {this.props.comicList.map((comic) => 
                        <Col sm={6}  key ={comic.id} className = "comic_list" >
                            <Link to = {'/comic/' + comic.id}>
                                <ComicDataComponent comic = {comic}/>
                            </Link>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchComicList: fetchComicListAction
}, dispatch)

const mapStateToProps=(state) => {
    return {
        comicList :state.comic.comicList,
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Comics);