import { Carousel,  Image  } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BlogListCarousel(props){

    return(
        <div className = "">
            <Carousel className = "blog_list_carousel my-2">
                { props.bloglist.map((blog) =>
                   
                    <Carousel.Item className = "blog_list_carousel_item" key = {blog.id}>
                        <Link to = { '/blog/' + blog.id} >
                            <Image className = "blog_list_carousel_image"
                                    src= {blog.img.link}
                                    alt="slide"/>
                            <Carousel.Caption>
                            <p className = "blog_list_carousel_title">{blog.title}</p>
                            <p>{blog.description}</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default BlogListCarousel