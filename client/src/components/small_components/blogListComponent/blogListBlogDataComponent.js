import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogListBlogDataComponent(props){
    return(
        <Col sm = {6} md = {4} className = "mb-5 ">
            <Link to = {'/blog/' + props.blog.id}>
                <div className = "container-fluid blog_list_blog">
                    <Row className = "blog_list_blog_image_container blog_data">
                        <Image src = {props.blog.photo.url} fluid className = "blog_list_blog_image"></Image>
                    </Row>
                    <div className = "blog_list_blog_data">
                        <Row className = "blog_data">
                            <strong>{props.blog.title}</strong>
                        </Row>
                        <Row className = "blog_data">
                            {props.blog.description}
                        </Row>
                        <div className = "blog_list_blog_data_details">
                            <Row className = "blog_data">
                                Posted by
                            </Row>
                            <Link to = {"/user/" + props.blog.user.UserId}>
                                <Row className = "blog_data">
                                    <Col xs = {2}>
                                        <Image src = {props.blog.user.ProfilePhoto} className = "blog_list_blog_uploader_photo" roundedCircle></Image>
                                    </Col>
                                    <Col>
                                        {props.blog.user.firstname} {props.blog.user.lastname}
                                    </Col>
                                </Row>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default BlogListBlogDataComponent