import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogListBlogDataComponent(props){
    return(
        <Container>
        <div className = "mx-auto mb-5 blog_list_blog">
                <Image src = {props.blog.photo.url} fluid></Image>
                <Col>
                    <Row>
                        <Link to = {'/blog/' + props.blog.id}>
                        <strong>{props.blog.title}</strong>
                        </Link>
                    </Row>
                    <Row>
                        {props.blog.description}
                    </Row>
                    <div className = "mt-auto">
                        <Row>
                            Posted by
                        </Row>
                        <Row className = "">
                            <Col xs = {2}>
                                <Image src = {props.blog.user.ProfilePhoto} className = "blog_list_blog_uploader_photo" roundedCircle></Image>
                            </Col>
                            <Col>
                                {props.blog.user.firstname} {props.blog.user.lastname}
                            </Col>
                        </Row>
                    </div>
                </Col>
        </div>
        </Container>
    )
}

export default BlogListBlogDataComponent