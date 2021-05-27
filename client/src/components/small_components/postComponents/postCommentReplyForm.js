import { Component } from "react";
import { Form, Button, Row } from 'react-bootstrap'
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
                <div className="reply_form">
                    <div className = "reply_on_comment">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = {"Enter reply to " + this.props.replyToUser}
                                            onChange = {this.handleOnChange} 
                                            value = {this.state.message}
                                          >
                                </Form.Control>
                                <Row>
                                    <div className="post_comment_buttons">
                                        <Button className = "btn-sm my-1" onClick = {() => this.reply()}>
                                            Reply
                                        </Button>
                                        
                                 
                                  
                                        <Button className= "btn-sm my-1 mx-1" onClick = {this.props.closeReplyForm}>
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
    postPostReply
}, dispatch)

export default connect(null, mapDispatchToProps)(PostCommentReplyForm)