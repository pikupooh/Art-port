import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image,Button } from 'react-bootstrap';

class SearchResults extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
    }

    render(){
        console.log(this.props);
        return(
            <div className="search">
                <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>

                    <Row className = "pt-5">
                        <p>
                            <a className = "search_button" href= "#">Posts </a>
                        </p>
                        <p>
                            <a className = "search_button" href= "#">Blogs </a>
                        </p>
                        <p>
                        <a className = "search_button" href= "#">Comics </a> 
                        </p>
                        <p>
                            <a className = "search_button" href= "#">Mangas </a>
                        </p>
                    </Row>

                    {this.props.posts.length > 0 &&
                        <div>     
                            <Row>
                                <h5 className = "top_result"> Posts </h5>
                            </Row>
                            <div className="top_result_data">
                                    {this.props.posts && this.props.posts.map((post, i) => 
                                        <PostRow post = {post} index = {i}/> 
                                    )}
                            </div>
                            <div>
                            { this.props.posts.length > 2 && 
                                <Button> Show All</Button>
                            }
                            </div>
                        </div>
                    }



                    {this.props.blogs.length > 0 &&
                        <div>     
                            <Row>
                                <h5 className = "top_result"> Blogs </h5>
                            </Row>
                            <div className="top_result_data">
                                    {this.props.blogs && this.props.blogs.map((blog, i) => 
                                        <BlogRow blog = {blog} index = {i}/> 
                                    )}
                            </div>
                            <div>
                                { this.props.blogs.length > 2 && 
                                    <Button> Show All</Button>
                                }
                            </div>
                        </div>
                    }

                    

                    {this.props.mangas.length > 0 &&
                        <div>     
                            <Row>
                                <h5 className = "top_result"> Mangas </h5>
                            </Row>
                            <div className="top_result_data">
                                    {this.props.mangas && this.props.blogs.map((manga, i) => 
                                        <MangaRow manga = {manga} index = {i}/> 
                                    )}
                            </div>
                            <div>
                                { this.props.blogs.length > 2 && 
                                    <Button> Show All</Button>
                                }
                            </div>
                        </div>
                    }

                    {this.props.comics.length > 0 &&
                        <div>     
                            <Row>
                                <h5 className = "top_result"> Comics </h5>
                            </Row>
                            <div className="top_result_data">
                                    {this.props.comics && this.props.comics.map((comic, i) => 
                                        <ComicRow comic = {comic} index = {i}/> 
                                    )}
                            </div>
                            <div>
                                { this.props.blogs.length > 2 && 
                                    <Button> Show All</Button>
                                }
                            </div>
                        </div>
                    }

                    {this.props.posts.length === 0 && this.props.posts.length === 0 
                        && this.props.posts.length === 0 && this.props.posts.length === 0 
                        && 
                        <div> Nothing found</div>
                    }
                </Container>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.search.posts,
        blogs: state.search.blogs,
        comics: state.search.comics,
        mangas: state.search.mangas,
    };
  };



 export default connect(mapStateToProps)(SearchResults);


 function PostRow(props) {

    if( props.index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ="#">
                    <div className = "search_image_container">
                        <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ="#">
                    <div className ="search_result_heading">The Middle</div>
                </Link>
                    <div className="result_description">
                        Video |  Grey, Zedd & Maren Morris |  105M likes
                    </div>
            </Col>
        </Row>
     )
 }

 function BlogRow(props) {

    if( props.index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ="#">
                    <div className = "search_image_container">
                        <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ="#">
                    <div className ="search_result_heading">The Middle</div>
                </Link>
                    <div className="result_description">
                        Video |  Grey, Zedd & Maren Morris |  105M likes
                    </div>
            </Col>
        </Row>
     )
 }

 function MangaRow(props) {

    if( props.index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ="#">
                    <div className = "search_image_container">
                        <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ="#">
                    <div className ="search_result_heading">The Middle</div>
                </Link>
                    <div className="result_description">
                        Video |  Grey, Zedd & Maren Morris |  105M likes
                    </div>
            </Col>
        </Row>
     )
 }

 function ComicRow(props) {

    if( props.index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ="#">
                    <div className = "search_image_container">
                        <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ="#">
                    <div className ="search_result_heading">The Middle</div>
                </Link>
                    <div className="result_description">
                        Video |  Grey, Zedd & Maren Morris |  105M likes
                    </div>
            </Col>
        </Row>
     )
 }