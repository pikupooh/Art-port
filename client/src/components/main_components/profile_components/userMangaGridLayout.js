import { Col, Image, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import deleteUserManga from '../../../redux/thunk/deleteUserManga'

class UserMangaGridLayout extends React.Component{

    deleteManga = () => {
        
        this.props.deleteUserManga(this.props.userId, this.props.manga.id);
    }

    render() {
        if(this.props.manga.coverPhoto === null) {
            this.props.manga.coverPhoto = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
        }
        return(    
            <Link to = {'/mangas/' + this.props.manga.id}>
                <div className = "home_grid_posts">
                    <div className = "home_grid_posts_image_container">
                            <Image src = {this.props.manga.coverPhoto.link} className = "home_grid_posts_image" />
                    </div>
                    <div className = "home_grid_posts_details_overlay">
                        <Row className = "home_grid_posts_details_container">
                            <Col className = "home_grid_posts_details_container_username ml-2 my-auto">
                                <Link to = {'/user/' + this.props.manga.userDTO.userId + '/manga'} >
                                    <DeleteButton id = {this.props.manga.userDTO.userId}
                                                        userId = {this.props.userId}
                                                        deleteManga = {this.deleteManga}/>
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
      deleteUserManga: deleteUserManga,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(UserMangaGridLayout);

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" onClick = {props.deleteManga}>
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