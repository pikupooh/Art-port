import React from 'react'
import SearchBar from '../small_components/search_bar'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import fetchComicListAction from '../../redux/thunk/fetchComicList '

class Comics extends React.Component{
    componentDidMount() {
        this.props.fetchComicList()
    }
    render(){
        return(
            <div>
              {this.props.comicList.map((comic) => 
                    <div key ={comic.comicid}>
                        <Link to = {'/comic/' + comic.comicid}>
                        {comic.comicid}
                    </Link>
                    </div>
                )}
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