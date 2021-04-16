import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import fetchUserDataAction from '../../redux/thunk/fectchUserData'

class UserProfile extends React.Component{

    componentDidMount(){
        this.props.fetchUserData(this.props.userId)
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.email}
                </div>
                <div>
                    {this.props.username}
                </div>
                <div>
                    {this.props.followers}
                </div>
                <div>
                    {this.props.following}
                </div>
                <div>
                    <img src = {this.props.user_photo}></img>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
    fetchUserData: fetchUserDataAction
}, dispatch)

const mapStateToProps = (state) => {
    return{
        userId: state.user.userId,
        email: state.user.email,
        username: state.user.username,
        followers: state.user.followers,
        following: state.user.following,
        user_photo: state.user.user_photo,
        postList: state.user.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)