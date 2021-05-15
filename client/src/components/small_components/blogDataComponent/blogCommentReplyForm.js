import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import postBlogReply from "../../../redux/thunk/post/postBlogReply";

class BlogCommentReplyForm extends Component{
    
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
            this.props.postBlogReply(this.props.parentCommentId, this.state.message, this.props.replyToUser)
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
                    <div classname ="reply_to">
                        Reply to {this.props.replyToUser}
                    </div>
                    <div className = "reply_on_comment">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = "Enter reply here" 
                                            onChange = {this.handleOnChange} 
                                            value = {this.state.message}
                                            style = {{borderRadius:"10px"}}>
                                </Form.Control>
                                <Row>
                                    <Col className = "comment_button" >
                                        <Button className = "btn-sm my-1" onClick = {() => this.reply()}>
                                            Reply
                                        </Button>
                                        <Button className= "btn-sm my-1 mx-1" onClick = {this.props.closeReplyForm}>
                                            Cancel
                                        </Button>
                                    </Col>
                                    <Col >
                                        
                                    </Col>
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
    postBlogReply: postBlogReply
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogCommentReplyForm)