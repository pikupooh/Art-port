import { Form, Col, Row, Button } from 'react-bootstrap'

function PostCommentSection(){

    return(
        <div className = "my-4 post_comment_textarea">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "add_background_color">
                                <Button className = "btn-sm ml-auto">
                                    Comment
                                </Button>
                            </Col>
                            <Col className = "add_background_color">
                                
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>

            </div>
    )
}

export default PostCommentSection