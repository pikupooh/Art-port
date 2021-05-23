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
    }
    render(){
        return(
            < Row>
                   
                    {this.props.comicList.map((comic) => 
                        
                        <Col sm={6}  key ={comic.id} style={{paddingRight:"0px",paddingLeft :"0px"}}>
                            <Link to = {'/comic/' + comic.id}>
                                <ComicDataComponent comic = {comic}/>
                            </Link>
                            </Col>
            
                    )}
                   
            </Row>
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