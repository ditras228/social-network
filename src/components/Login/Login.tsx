import React from 'react'
import {useFormik} from 'formik'
import {Redirect} from 'react-router-dom'
import * as yup from 'yup'
import LoginFormik from './LoginFormik'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {logIn} from '../../redux/auth-reducer'

export const Login: React.ComponentType = () => {
    const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth)
    const dispatch = useDispatch()
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
            onSubmit: values => {
                dispatch(logIn(values.email, values.password, values.rememberMe, values.captcha))
            },
            validationSchema: validationSchema
        }
    )
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <LoginFormik formik={formik}/>
    )
}

