import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import fetchPostListAction from '../../redux/thunk/fetchPostsList'

class HomeGrid extends React.Component{

    componentDidMount(){
        this.props.fetchPostList()
    }

    render(){
        return(
            <div>
                {this.props.postList.map((post) => 
                    <div key={post.PostId}>
                    <Link to = {'/post/' + post.PostId} >
                        {post.PostId}
                    </Link>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.grid.postList
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
    fetchPostList: fetchPostListAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeGrid);