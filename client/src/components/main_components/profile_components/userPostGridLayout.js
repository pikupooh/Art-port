import { Col, Image, Row, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import deleteUserPost from '../../../redux/thunk/deleteUserPost'

class UserPostGridLayout extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    deletePost = () => {
        this.props.deleteUserPost(this.props.userId, this.props.post.id);
    }

    render() {
        if(this.props.post.images.length === 0) {
            this.props.post.images = [{
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
            ]
        }
        return(    
            <Link to = {'/post/' + this.props.post.id}>
                <div className = "home_grid_posts">
                    <div className = "home_grid_posts_image_container">
                            <Image src = {this.props.post.images[0].link} className = "home_grid_posts_image" />
                    </div>
                    <div className = "home_grid_posts_details_overlay">
                        <Row className = "home_grid_posts_details_container">
                            <Col className = "home_grid_posts_details_container_username ml-2 my-auto">
                                <Link to = {'/user/' + this.props.post.user.userId} >
                                    <DeleteButton id = {this.props.post.user.userId}
                                                        userId = {this.props.userId}
                                                        deletePost = {this.deletePost}/>
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
        deleteUserPost: deleteUserPost,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(UserPostGridLayout);

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" onClick = {props.deletePost}>
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