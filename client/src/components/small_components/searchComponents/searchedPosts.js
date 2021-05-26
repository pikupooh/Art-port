import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image,Button } from 'react-bootstrap';

class SearchedPosts extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
    }

    render(){
        console.log(this.props);
        return(  
            <div className = "search">
                <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>
                     <div className="top_result_data">
                                    { this.props.posts && this.props.posts.map((post, i) => 
                                          <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to = {'/post/' + post.id}>
                    {post.images.length !== 0 && <div className = "search_image_container">
                        <Image src = {post.images[0].link} className="search_image" alt = "post_photo"></Image>
                    </div>
                    }
                </Link>
            </Col>
            <Col>
                <Link to ={'/post/' + post.id}>
                    <div className ="search_result_heading">{post.title}</div>
                </Link>
                    <div className="result_description">
                        Post |  {post.user.username} |  {post.likes.length} likes
                    </div>
            </Col>
        </Row>
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