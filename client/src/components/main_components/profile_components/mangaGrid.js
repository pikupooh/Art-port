import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserMangaGridLayout from './userMangaGridLayout'

class MangaGrid extends React.Component{
    render(){

        if(this.props.mangaList.length === 0){
            return(
                <div className = "no_user_post_text">
                    No manga uploaded by the user
                </div>
            )
        }

        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.mangaList.map((manga) => 
                    <Col key={manga.id} sm = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserMangaGridLayout  manga = {manga}/>
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
        mangaList: state.profile.userMangas,
    }
}

export default connect(mapStateToProps)(MangaGrid);