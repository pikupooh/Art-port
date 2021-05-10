import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class BlogCommentSection extends React.Component{

    comment = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }
    }

    render(){
        return(
            <div className = "my-4 blog_page_comment_section">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "comment_button" >
                                <Button className = "btn-sm" id = "blog_data_comment_btn" onClick = {this.comment}>
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
}

const mapDispatchToProps = (dispatch) => {
    return{
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'})
    }
}

export default connect(null, mapDispatchToProps)(BlogCommentSection)