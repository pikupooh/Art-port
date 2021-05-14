import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import postPostReply from "../../../redux/thunk/post/postPostReply";

class PostCommentReplyForm extends Component{
    
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

    reply = () => {
        if(this.state.message !== ''){
            this.props.postPostReply(this.props.parentCommentId, this.state.message, this.props.replyToUser)
            this.setState({
                message: ''
            })
        }
        this.props.closeReplyForm()
    }

    render(){
        if(this.props.isReply === true){
            return(
                <Col className = "mt-2">
                    <Form >
                        <Form.Group>
                            <Form.Control as="textarea" rows = {1} 
                                        placeholder = {"Enter reply to " + this.props.replyToUser}
                                        onChange = {this.handleOnChange} 
                                        value = {this.state.message}>
                            </Form.Control>
                            <Row>
                                <Col className = "comment_button" >
                                    <Button className = "btn-sm" onClick = {() => this.reply()}>
                                        Reply
                                    </Button>
                                    <p onClick = {this.props.closeReplyForm}>
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
    postPostReply
}, dispatch)

export default connect(null, mapDispatchToProps)(PostCommentReplyForm)