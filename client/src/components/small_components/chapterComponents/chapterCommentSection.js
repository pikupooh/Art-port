import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import postChapterComment from "../../../redux/thunk/post/postChapterComment"

class ChapterCommentSection extends React.Component{

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
            this.props.postChapterComment(this.props.chapterId, this.props.mangaId, this.state.message)
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
                                <Button className = "btn-sm mx-2 my-1" id = "comment_button" onClick = {this.comment}>
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
        postChapterComment
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        user: state.user,
        mangaId: state.mangaChapter.mangaId,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChapterCommentSection)