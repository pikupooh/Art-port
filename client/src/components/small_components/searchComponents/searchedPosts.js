import React from 'react'
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image,Button } from 'react-bootstrap';

class SearchedPosts extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
    }

    render(){
        return(  
            <div className = "search">
                <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>
                    <div className="top_result_data">
                        { this.props.posts && this.props.posts.map((post, i) => 
                            <Link to = {'/post/' + post.id} key = {i}>
                                <Row className = "my-1 A">
                                    <Col sm ={1}>
                                        {post.images.length !== 0 && <div className = "search_image_container">
                                            <Image src = {post.images[0].link} className="search_image" alt = "post_photo"></Image>
                                        </div>
                                        }
                                    </Col>
                                    <Col>
                                        <div className ="search_result_heading">{post.title}</div>
                                        <div className="result_description">
                                            Post |  {post.user.username} |  {post.likes.length} likes
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
        posts: state.search.posts
    };
  };

  export default connect(mapStateToProps)(SearchedPosts);