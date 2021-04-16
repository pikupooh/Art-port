import  React  from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { signInUserAction } from '../../redux/actions/logActions'
import { updateUserInfoAction } from '../../redux/actions/userInfoUpdateAction'

class ProfileCircle extends React.Component{

    handleSignIn = () => {
        this.props.signInUser();
    }

    render(){
        if(this.props.isAuthenticated){
            return(
                <div>
                    <Link to = {'/' + this.props.userId}>
                        <img className = "rounded-circle nav_profile_img" alt = "user_photo" 
                            src = "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg">
                        </img>
                    </Link>
                </div>
            )
        }
        else{
            return(
                <Button className = "ml-3" onClick = {this.handleSignIn}>Sign In</Button>
            )
        }
    };
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuthenticated: state.auth.isAuthenticated,
        userPhoto: state.user.userPhoto,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: () => {dispatch(signInUserAction())},
        updateUserInfo: () => {dispatch(updateUserInfoAction())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCircle)