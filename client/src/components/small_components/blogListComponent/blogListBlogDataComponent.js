import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogListBlogDataComponent(props){
    return( 
        <Col sm = {6} lg = {4} className = "mb-5 ">
            <Link to = {'/blog/' + props.blog.id}>
                <div className = "container-fluid blog_list_blog">
                    <Row className = "blog_list_blog_image_container blog_data">
                        <Image src = {props.blog.img.link} fluid className = "blog_list_blog_image"></Image>
                    </Row>
                    <div className = "blog_list_blog_data">
                        <Row className = "blog_list_blog_title blog_data">
                            <strong>{props.blog.title}</strong>
                        </Row>
                        <div className = "blog_list_blog_data_details">
                            <Row className = "blog_data mb-2">
                                Posted by
                            </Row>
                            <Link to = {"/user/" + props.blog.user.id}>
                                <Row className = "blog_data">
                                    <Col sm = {2} >
                                        <Image fluid src = {props.blog.user.profilePhoto.link} className = "blog_list_blog_uploader_photo" roundedCircle></Image>
                                    </Col>
                                    <Col>
                                        <span className = "username">
                                            {props.blog.user.firstName} {props.blog.user.lastName}
                                        </span>
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