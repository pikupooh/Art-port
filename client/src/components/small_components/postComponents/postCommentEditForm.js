import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import editPostComment from "../../../redux/thunk/put/editPostComment";

class PostCommentEditForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    edit = () => {
        if(this.state.message !== ''){
            this.props.editPostComment(this.props.commentId, this.state.message)
            this.setState({
                message: ''
            })
        }
        this.props.closeEditForm();
    }

    render(){
        if(this.props.isEdit === true){
            return(
                <Col className = "mt-2">
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows = {1} 
                                        placeholder = "Enter edited commment here" 
                                        onChange = {this.handleOnChange} 
                                        value = {this.state.message}>
                            </Form.Control>
                            <Row>
                                <Col className = "comment_button" >
                                    <Button className = "btn-sm" onClick = {this.edit}>
                                        Edit
                                    </Button>
                                    <p onClick = {this.props.closeEditForm}>
                                            Cancel
                                        </p>
                                </Col>
                                <Col >
                                    
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editPostComment
}, dispatch)

export default connect(null, mapDispatchToProps)(PostCommentEditForm)