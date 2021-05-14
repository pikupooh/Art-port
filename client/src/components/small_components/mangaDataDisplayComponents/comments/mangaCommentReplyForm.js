import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import postMangaReply from "../../../../redux/thunk/post/postMangaReply";

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
            this.props.postMangaReply(this.props.parentCommentId, this.state.message, this.props.replyToUser)
            this.setState({
                message: ''
            })
        }
        this.props.closeReplyForm()
    }

    render(){
        if(this.props.isReply === true){
            return(
                <Row>
                    <Col sm = {2}>
                        Reply to {this.props.replyToUser}
                    </Col>
                    <Col className = "">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = "Enter reply here" 
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
                </Row>
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
    postMangaReply
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogCommentReplyForm)