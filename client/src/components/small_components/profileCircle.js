import React from "react";
import { connect } from "react-redux";
import { Button, Image, NavDropdown } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { logoutUser } from "../../redux/thunk/loging";
import { altImage } from "../../shared/categories";
import { withRouter } from "react-router-dom";

class ProfileCircle extends React.Component {
    componentDidMount() {
    }

    signOut = () => {
        this.props.logoutUser();
        window.location.reload();
    };

    showModal = () => {
        if(this.props.location.pathname === "/forgotPassword" || this.props.location.pathname === "/reset-success" || this.props.location.pathname === "/reset-failure"){
            this.props.history.replace("/")
        }
        this.props.showSignInModal();
    };

    render() {
        if (this.props.isAuthenticated === true) {
            return (
                <div>
                    <Image
                        roundedCircle
                        
                        className="nav_profile_img"
                        alt={altImage}
                        src={this.props.profilePhoto}
                    ></Image>
                    <NavDropdown title="" id="nav-dropdown" variant="tabs">
                        <NavDropdown.Item href={"/user/" + this.props.userId}>
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.signOut}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            );
        } else {
            return (
                <Button className="ml-1 my-auto" style={{width:"80px"}} onClick={this.showModal}>
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
            logoutUser,
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileCircle));
