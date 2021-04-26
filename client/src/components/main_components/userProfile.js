import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, Button } from 'react-bootstrap';

import fetchUserDataAction from "../../redux/thunk/fetchUserData";
import { signOutUserAction } from "../../redux//actions/logActions"
class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUserData();
  }

  signOut = () => {
    const { history } = this.props;
    history.replace('/');
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        <div className = "text-center profile_page_header">
          <div className = "text-center profile_photo">
            <Image src = {this.props.profilePhoto} roundedCircle 
                      className = "profile_page_photo"></Image>
          </div>
          <div className = "profile_page_user_name">
            <div>
              {this.props.firstName}  {this.props.lastName}
            </div>
          </div>
        </div>
        <div>
          <Button onClick = {this.signOut}>
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchUserData: fetchUserDataAction,
    signOutUser: () => dispatch(signOutUserAction),
  },
  dispatch
);
  

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId,
    email: state.user.email,
    userName: state.user.userName,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    profilePhoto: state.user.profilePhoto,
    dob: state.user.dob,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
