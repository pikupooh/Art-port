import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserComicGridLayout from './userComicGridLayout'

class ComicGrid extends React.Component{
    render(){

        if(this.props.comicList.length === 0){
            return(
                <div className = "no_user_post_text">
                    No comic uploaded by the user
                </div>
            )
        }

        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.comicList.map((comic) => 
                    <Col key={comic.id} xs = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserComicGridLayout  comic = {comic}/>
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comicList: state.profile.userComics,
    }
}

export default connect(mapStateToProps)(ComicGrid);