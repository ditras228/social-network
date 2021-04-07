import React from 'react';
import {useFormik} from 'formik';
import {Redirect} from "react-router-dom";
import * as yup from 'yup'
import LoginFormik from "./LoginFormik";

const Login = (props) => {

    const validationSchema = yup.object().shape({
        email: yup.string().email('Некорректный Email').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            },
            onSubmit: values => (
                props.props.login(values.email, values.password, values.rememberMe,values.captcha)
            ),
            validateOnBlur: values => (
                console.log(values.email)
            ),
            validationSchema: validationSchema
        }
    )

    if (props.props.authReducer.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <LoginFormik formik={formik} captchaUrl={props.props.captchaUrl}/>
    )
}
export default Login
