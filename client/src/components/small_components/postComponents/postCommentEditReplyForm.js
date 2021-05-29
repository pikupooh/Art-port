import { Component } from "react";
import { Form, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import editPostReply from "../../../redux/thunk/put/editPostReply"

class PostCommentEditReplyForm extends Component{
    
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

        this.props.editPostReply(this.props.replyId, this.state.message)
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
                <div className="reply_form">
                    <div className = "reply_on_comment">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = {"Enter edited reply " }
                                            onChange = {this.handleOnChange} 
                                            value = {this.state.message}
                                          >
                                </Form.Control>
                                <Row>
                                    <div className="post_comment_buttons">
                                        <Button className = "btn-sm my-1" onClick = {() => this.edit()}>
                                            Edit
                                        </Button>
                                        <Button className= "btn-sm my-1 mx-1" onClick = {this.props.closeEditReplyForm}>
                                            Cancel
                                        </Button>
                                   </div>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
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
    editPostReply
}, dispatch)

export default connect(null, mapDispatchToProps)(PostCommentEditReplyForm)