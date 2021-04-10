import React from 'react';
import {logIn, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Login from "./Login";
import {AppStateType} from "../../redux/redux-store";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login props={this.props}/>
        )
    }
}

let mapStateToProps = (state:AppStateType) => {

    return {
        authReducer: state.authReducer,
        captchaUrl: state.authReducer.captchaUrl
    }
}
export default connect(mapStateToProps, {login: logIn, logout})(LoginContainer)