import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import fetchBlogListAction from '../../redux/thunk/fetchBlogList'

class blogs extends React.Component{
    componentDidMount() {
        this.props.fetchBlogList()
    }
    render(){
        return(
            <div>
              {this.props.blogList.map((blog) => 
                    <div key ={blog.id}>
                        <Link to = {'/blog/' + blog.id}>
                        {blog.title}
                    </Link>
                    </div>
                )}
            </div>
        )
    }
 
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchBlogList: fetchBlogListAction
}, dispatch)

const mapStateToProps=(state) => {
    return {
        blogList :state.blog.blogList,
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (blogs);