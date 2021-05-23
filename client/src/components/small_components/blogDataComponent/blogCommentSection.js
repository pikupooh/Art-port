import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import postBlogComment from "../../../redux/thunk/post/postBlogComment"

class BlogCommentSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: '',
        }
    }

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    comment = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }

        if(this.state.message !== ''){
            this.props.postBlogComment(this.props.blogId, this.state.message)
            this.setState({
                message: ''
            })
        }
    }

    render(){
        return(
            <div className = "my-2 blog_page_comment_section">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} 
                                    placeholder = "Enter comment here" 
                                    onChange = {this.handleOnChange} 
                                    value = {this.state.message}
                                    style={{borderRadius:"25px"}}>
                        </Form.Control>
                        <Row>
                            <Col  >
                                <Button className = "btn-sm mx-2 my-1" id = "blog_data_comment_btn" onClick = {this.comment}>
                                    Comment
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators(
    {
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'}),
        postBlogComment: postBlogComment
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        comments: state.blogData.comments,
        user: state.user,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogCommentSection)