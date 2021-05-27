import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

class Overlay extends React.Component {

    render() {
        if (this.props.status === true) {
            return ( 
              <div className="overlay-loading">
                <Spinner animation="border" role="status">
                  <span className="sr-only">{this.props.message}</span>
                </Spinner>
              </div>
            );
        }
        return (<div></div>);
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.loading.status,
        message: state.loading.message,
    };
};

export default connect(mapStateToProps)(Overlay);
