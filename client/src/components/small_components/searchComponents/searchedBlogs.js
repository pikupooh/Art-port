import React from 'react'
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image } from 'react-bootstrap';

class SearchedBlogs extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
    }

    render(){
        return(
             <div className = "search">
                    <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>
                        <div className="top_result_data">
                            {this.props.blogs && this.props.blogs.map((blog, i) => 
                                <Link to ={'/blog/' + blog.id} key = {i}>
                                    <Row className = "my-1 A">
                                        <Col sm ={1} >
                                            <div className = "search_image_container">
                                                <Image src = {blog.img.link} className="search_image" alt = "blog_cover_photo"></Image>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className ="search_result_heading">{blog.title}</div>
                                            <div className="result_description">
                                                Blog |  {blog.user.username} |  {blog.likes.length} likes
                                            </div>
                                        </Col>
                                    </Row>
                                </Link>
                            )}
                        </div>
                    </Container>
              </div>      
        )
    }

}    
const mapStateToProps = (state) => {
    return {
        blogs: state.search.blogs,
    };
  };
  export default connect(mapStateToProps)(SearchedBlogs);