import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import editBlogReply from "../../../redux/thunk/put/editBlogReply"

class BlogCommentEditReplyForm extends Component{
    
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

        this.props.editBlogReply(this.props.replyId, this.state.message)
        if(this.state.message !== ''){
            this.setState({
                message: ''
            })
        }
        this.props.closeEditReplyForm();
    }

    render(){
        if(this.props.isEdit === true){
            return(
                <Col className = "mt-2">
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows = {1} 
                                        placeholder = "Enter edited reply here" 
                                        onChange = {this.handleOnChange} 
                                        value = {this.state.message}>
                            </Form.Control>
                            <Row>
                                <Col className = "comment_button" >
                                    <Button className = "btn-sm" onClick = {this.edit}>
                                        Edit Reply
                                    </Button>
                                    <p onClick = {this.props.closeEditReplyForm}>
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
    editBlogReply
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogCommentEditReplyForm)