import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserComicGridLayout from './userComicGridLayout'

class ComicGrid extends React.Component{
    render(){
        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.comicList.map((comic) => 
                    <Col key={comic.id} sm = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserComicGridLayout  comic = {comic}/>
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        comicList: state.profile.userComics,
    }
}

export default connect(mapStateToProps)(ComicGrid);