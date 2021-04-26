import React from 'react'
import SearchBar from '../small_components/search_bar'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import fetchMangaListAction from '../../redux/thunk/fetchMangaList'
class Manga extends React.Component{
    componentDidMount() {
        this.props.fetchMangaList()
    }
    render(){
        return(
            <div>
                <SearchBar />
              {this.props.mangaList.map((manga) => 
                    <div key ={manga.mangaid}>
                        <Link to = {'/mangas/' + manga.mangaid}>
                        {manga.mangaid}
                    </Link>
                    </div>
                )}
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