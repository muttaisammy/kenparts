import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// import Vin from "../Vin";
import SavedVin from "../SavedVin";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="landing-copy col s12 center-align">
                        <h4 style={{ color: 'white' }}>
                            {user.name}  - Welcome to KENSTATE</h4>
                        <button
                            style={{
                                width: "80px",
                                borderRadius: "2px",
                                letterSpacing: "1px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}>
                            Logout
                        </button>
                    </div>
                </div>
                {/* <Vin /> */}
                <SavedVin />
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);