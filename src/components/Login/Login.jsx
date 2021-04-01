import React from 'react';
import {useFormik} from 'formik';
import {login, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false
            },
            onSubmit: values => (
                props.props.login(values.email, values.password, values.rememberMe)
            ),
        }
    )
    if (props.props.authReducer.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name="email" type='email' onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <input name="password" type='password' onChange={formik.handleChange} value={formik.values.password}/>
            <input name="rememberMe" type='checkbox' onChange={formik.handleChange} value={formik.values.rememberMe}/>
            rememberMe
            <button type={"submit"}>LogIn</button>


        </form>

    )
}

class Login extends React.Component {

    render() {
        return (

            <LoginForm props={this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer,

    }
}
export default connect(mapStateToProps, {login, logout})(Login)