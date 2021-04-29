import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BlogListCarousel(props){

    return(
        <div className = "m-5">
            
            <Carousel className = "blog_list_carousel">
                { props.bloglist.map((blog) =>
                <Carousel.Item className = "blog_list_carousel_item" key = {blog.id}>
                    <Row>
                        <img
                        className="blog_list_carousel_image"
                        src= {blog.photo.url}
                        alt="First slide"
                        />
                    <Col className = "ml-4">
                        <Row className = "my-auto">
                            {blog.title}
                        </Row>
                        <Row className = "mt-auto">
                            {blog.description}
                        </Row>
                        <Row className = "mt-auto">
                            <Link to = { '/blog/' + blog.id} >
                                Read
                            </Link>
                        </Row>
                    </Col>
                    </Row>
                </Carousel.Item>
                )}
            </Carousel>
           
        </div>
    )
}

export default BlogListCarousel