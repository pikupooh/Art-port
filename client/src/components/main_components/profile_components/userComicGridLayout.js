import { Col, Image, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import deleteUserComic from '../../../redux/thunk/deleteUserComic'

class UserComicGridLayout extends React.Component{

    deleteComic = () => {
        console.log("delete")
        this.props.deleteUserComic(this.props.userId, this.props.comic.id);
    }

    render() {
        if(this.props.comic.coverPhoto === null) {
            this.props.comic.coverPhoto = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
        }
        return(    
            <Link to = {'/comic/' + this.props.comic.id}>
                <div className = "home_grid_posts">
                    <div className = "home_grid_posts_image_container">
                            <Image src = {this.props.comic.coverPhoto.link} className = "home_grid_posts_image" />
                    </div>
                    <div className = "home_grid_posts_details_overlay">
                        <Row className = "home_grid_posts_details_container">
                            <Col className = "home_grid_posts_details_container_username ml-2 my-auto">
                                <Link to = {'/user/' + this.props.comic.userDTO.userId + '/comics'} >
                                    <DeleteButton id = {this.props.comic.userDTO.userId}
                                                        userId = {this.props.userId}
                                                        deleteComic = {this.deleteComic}/>
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
      deleteUserComic: deleteUserComic,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(UserComicGridLayout);

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" onClick = {props.deleteComic}>
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