import { Form, Col, Row, Button } from 'react-bootstrap'

function BlogCommentSection(){

    return(
        <div className = "my-4">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col >
                                <Button className = "btn-sm ml-auto">
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