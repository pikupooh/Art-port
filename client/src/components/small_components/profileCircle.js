import  React  from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import fetchUserDataAction from '../../redux/thunk/fetchUserData'
class ProfileCircle extends React.Component{

    componentDidMount() {
        this.props.fetchUserData();
      }

    render(){
        if(this.props.isAuthenticated === true){
            return(
                <div>
                    <Link to = {'/user/' + this.props.userId}>
                        <img className = "rounded-circle nav_profile_img" alt = "user_photo" 
                            src = {this.props.profilePhoto}>
                        </img>
                    </Link>
                </div>
            )
        }
        else{
            return(
                <Button className = "ml-3" onClick = {this.props.onShowModal}>Sign In</Button>
            )
        }
    };
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuthenticated: state.auth.isAuthenticated,
        profilePhoto: state.user.profilePhoto,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        fetchUserData: fetchUserDataAction,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCircle)