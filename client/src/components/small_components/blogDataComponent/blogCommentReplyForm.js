import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import postBlogReply from "../../../redux/thunk/post/postBlogReply";

class BlogCommentReplyForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            messege: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            messege: event.target.value
        })
    }

    reply = () => {
        if(this.state.messege !== ''){
            var mes = '@' + this.props.replyToUser + ' ' + this.state.messege
            this.props.postBlogReply(this.props.parentCommentId, mes)
            this.setState({
                messege: ''
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
                                            value = {this.state.messege}>
                                </Form.Control>
                                <Row>
                                    <Col className = "comment_button" >
                                        <Button className = "btn-sm" onClick = {this.reply}>
                                            Reply
                                        </Button>
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
    postBlogReply: postBlogReply
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogCommentReplyForm)