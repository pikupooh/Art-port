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
                                    {this.props.mangas && this.props.mangas.map((manga, i) => 
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

                    {this.props.posts.length === 0 && this.props.blogs.length === 0 
                        && this.props.mangas.length === 0 && this.props.comics.length === 0 
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


 function PostRow({post, index}) {

    if( index > 2 ){
        return(
            <span></span>
        )
    }

     return(
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
     )
 }

 function BlogRow({blog, index}) {

    if( index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to = {'/blog/' + blog.id}>
                    <div className = "search_image_container">
                        <Image src = {blog.img.link} className="search_image" alt = "blog_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ={'/blog/' + blog.id}>
                    <div className ="search_result_heading">{blog.title}</div>
                </Link>
                    <div className="result_description">
                        Blog |  {blog.user.username} |  {blog.likes.length} likes
                    </div>
            </Col>
        </Row>
     )
 }

 function MangaRow({manga, index}) {

    console.log(manga);

    var rating
    if(manga.ratingCount === 0){
        rating = "No Ratings"
    }
    else{
        rating = manga.rating/manga.ratingCount
    }

    if( index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ={'/mangas/' + manga.id}>
                    <div className = "search_image_container">
                        <Image src = {manga.coverPhoto.link} className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ={'/mangas/' + manga.id}>
                    <div className ="search_result_heading">{manga.title}</div>
                </Link>
                    <div className="result_description">
                    Manga |  {manga.userDTO.username} | {rating}
                    </div>
            </Col>
        </Row>
     )
 }

 function ComicRow({comic, index}) {

    var rating
    if(comic.ratingCount === 0){
        rating = "No Ratings"
    }
    else{
        rating = comic.rating/comic.ratingCount
    }

    if(index > 2 ){
        return(
            <span></span>
        )
    }

     return(
        <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ={'/comic/' + comic.id}>
                    <div className = "search_image_container">
                        <Image src = {comic.coverPhoto.link} className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ={'/comic/' + comic.id}>
                    <div className ="search_result_heading">{comic.title}</div>
                </Link>
                    <div className="result_description">
                        Comic |  {comic.userDTO.username} | {rating}
                    </div>
            </Col>
        </Row>
     )
 }