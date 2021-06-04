import { Col, Image, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import deleteUserBlog from '../../../redux/thunk/deleteUserBlog'

class UserBlogGridLayout extends React.Component{

    deleteBlog = () => {
  
        this.props.deleteUserBlog(this.props.userId, this.props.blog.id);
    }

    render() {
        if(this.props.blog.img === null) {
            this.props.blog.img = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
        }
        return(    
            <Link to = {'/blog/' + this.props.blog.id}>
                <div className = "home_grid_posts">
                    <div className = "home_grid_posts_image_container">
                            <Image src = {this.props.blog.img.link} className = "home_grid_posts_image" />
                    </div>
                    <div className = "home_grid_posts_details_overlay">
                        <Row className = "home_grid_posts_details_container">
                            <Col className = "home_grid_posts_details_container_username ml-2 my-auto">
                                <Link to = {'/user/' + this.props.blog.user.userId + '/blogs'} >
                                    <DeleteButton id = {this.props.blog.user.userId}
                                                        userId = {this.props.userId}
                                                        deleteBlog = {this.deleteBlog}/>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Link>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
      deleteUserBlog: deleteUserBlog,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(UserBlogGridLayout);

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" onClick = {props.deleteBlog}>
                delete
            </i>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
}