import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class PostCommentSection extends React.Component{

    comment = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }
    }

    render(){
        return(
            <div className = "my-4 post_comment_textarea">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "add_background_color">
                                <Button className = "btn-sm mt-2" onClick = {this.comment}>
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
}


const mapDispatchToProps = (dispatch) => {
    return{
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'})
    }
}

export default connect(null , mapDispatchToProps)(PostCommentSection)