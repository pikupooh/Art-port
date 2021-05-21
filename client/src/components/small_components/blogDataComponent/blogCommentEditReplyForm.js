import { Component } from "react";
import { Form, Button, Row, Col ,Container} from 'react-bootstrap'
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
                <Container>
                 <div className = "reply_on_comment">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = "Enter edited reply here" 
                                            onChange = {this.handleOnChange} 
                                            value = {this.state.message}
                                            style = {{borderRadius:"10px"}}>
                                </Form.Control>
                                <Row>
                                    <Col className = "comment_button" >
                                        <Button className = "btn-sm my-1" onClick = {this.edit}>
                                       Edit Reply 
                                        </Button>
                                        <Button className = "btn-sm my-1 mx-1" onClick = {this.props.closeEditReplyForm}>
                                        Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                    </Container>
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