import { Form, Col, Row, Button } from 'react-bootstrap'

function BlogCommentSection(){

    return(
        <div className = "my-4 blog_page_comment_section">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "comment_button" >
                                <Button className = "btn-sm" id = "blog_data_comment_btn">
                                    Comment
                                </Button>
                            </Col>
                            <Col >
                                
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
    )
}

export default BlogCommentSection