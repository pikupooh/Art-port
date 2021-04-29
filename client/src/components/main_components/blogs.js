import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import BlogDataComponent from '../small_components/blogListComponent/blogDataComponent'

import fetchBlogListAction from '../../redux/thunk/fetchBlogList'
import BlogListCarousel from '../small_components/blogListComponent/blogListCarousel'
import { Col, Container, Row } from 'react-bootstrap';
class blogs extends React.Component{

    componentDidMount() {
        this.props.fetchBlogList()
    }
    render(){
        return(
            <div className = "container-fluid">
                <BlogListCarousel bloglist = {this.props.carouselBlogList} />
                <Row>
                    {this.props.blogList.map((blog) => 
                        <Col sm = {6} md = {4}>
                            <BlogDataComponent blog = {blog} />
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
 
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchBlogList: fetchBlogListAction
}, dispatch)

const mapStateToProps=(state) => {
    return {
        blogList: state.blog.blogList,
        carouselBlogList: state.blog.carouselBlogList
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (blogs);