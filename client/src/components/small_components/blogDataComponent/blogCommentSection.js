import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import postBlogComment from "../../../redux/thunk/post/postBlogComment"
import { bindActionCreators } from 'redux'

class BlogCommentSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            messege: '',
        }
    }

    handleOnChange = (event) => {
        this.setState({
            messege: event.target.value
        })
    }

    comment = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }

        if(this.state.messege !== ''){
            this.props.postBlogComment(this.props.blogId, this.state.messege)
            this.setState({
                messege: ''
            })
        }
    }

    render(){
        return(
            <div className = "my-4 blog_page_comment_section">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} 
                                    placeholder = "Enter comment here" 
                                    onChange = {this.handleOnChange} 
                                    value = {this.state.messege}>
                        </Form.Control>
                        <Row>
                            <Col className = "comment_button" >
                                <Button className = "btn-sm" id = "blog_data_comment_btn" onClick = {this.comment}>
                                    Comment
                                </Button>
                            </Col>
                            <Col >
                                
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