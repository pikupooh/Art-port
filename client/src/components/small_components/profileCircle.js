import React from "react";
import { connect } from "react-redux";
import { Button, Image, NavDropdown } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { logoutUser } from "../../redux/thunk/loging";
import fetchUserDataAction from "../../redux/thunk/fetchUserData";
import { signOutUserAction } from "../../redux//actions/logActions";
import { altImage } from "../../shared/categories";

class ProfileCircle extends React.Component {
    componentDidMount() {
        this.props.fetchUserData();
    }

    signOut = () => {
        this.props.logoutUser();
        window.location.reload();
    };

    showModal = () => {
        this.props.showSignInModal();
    };

    render() {
        console.log(this.props.profilePhoto, this.props.userId);
        if (this.props.isAuthenticated === true) {
            return (
                <div className="text-center">
                    <Image
                        roundedCircle
                        fluid
                        className="nav_profile_img"
                        alt={altImage}
                        src={this.props.profilePhoto}
                    ></Image>
                    <NavDropdown title="" id="nav-dropdown" variant="tabs">
                        <NavDropdown.Item href={"/user/" + this.props.userId}>
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item>Add Post</NavDropdown.Item>
                        <NavDropdown.Item>Add Blog</NavDropdown.Item>
                        <NavDropdown.Item>Add Comic</NavDropdown.Item>
                        <NavDropdown.Item>Add Manga</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.signOut}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            );
        } else {
            return (
                <Button className="ml-3 my-auto" onClick={this.showModal}>
                    Sign In
                </Button>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuthenticated: state.auth.isAuthenticated,
        profilePhoto: state.auth.profilePhoto,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchUserData: fetchUserDataAction,
            logoutUser: logoutUser,
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCircle);
