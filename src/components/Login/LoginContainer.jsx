import React from 'react';
import {login, logout} from "../../redux/auth-reducer";
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
    }
}
export default connect(mapStateToProps, {login, logout})(LoginContainer)