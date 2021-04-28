import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image } from 'react-bootstrap';

import fetchArtistUserDataAction from "../../redux/thunk/fetchArtistUserData";

class ArtistProfile extends React.Component {

  componentDidMount() {
    let artistId = this.props.location.pathname.slice(8);
    this.props.fetchArtistUserData(artistId);
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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchArtistUserData: fetchArtistUserDataAction,
  },
  dispatch
);
  

const mapStateToProps = (state) => {
  return {
    userId: state.artistUserData.userId,
    email: state.artistUserData.email,
    userName: state.artistUserData.userName,
    firstName: state.artistUserData.firstName,
    lastName: state.artistUserData.lastName,
    profilePhoto: state.artistUserData.profilePhoto,
    dob: state.artistUserData.dob,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfile);
