import React from 'react';
import {logIn, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Login from "./Login";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login props={this.props}/>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        authReducer: state.authReducer,
        captchaUrl: state.authReducer.captchaUrl
    }
}
export default connect(mapStateToProps, {login: logIn, logout})(LoginContainer)