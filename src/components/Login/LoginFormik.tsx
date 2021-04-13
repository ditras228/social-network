import s from "./Login.module.css";
import React, {Component} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
type PropsType={
    formik: any
}
let LoginFormik: React.ComponentType<PropsType> = ({formik}) => {
    const captchaUrl = useSelector((state:AppStateType)=> state.authReducer.captchaUrl )

    return (
        <div className={s.container}>

            <form className={s.form} onSubmit={formik.handleSubmit}>
                <h2>Login</h2>

                <input
                    name="email"
                    type='email'
                    placeholder='Email'
                    className={s.field}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email }</p>}
                <input
                    name="password"
                    type='password'
                    placeholder='Password'
                    className={s.field}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}/>
                {formik.touched.password && formik.errors.password && <p>{formik.errors.password }</p>}
                <div><input
                    name="rememberMe"
                    type='checkbox'
                    onChange={formik.handleChange}
                    value={formik.values.rememberMe}
                />remember me
                </div>

                <button

                    type={"submit"}
                    disabled={!formik.isValid && !formik.dirty}
                >LogIn
                </button>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <input type="text"
                                        name="captcha"
                                        value={formik.values.captcha}
                                        onChange={formik.handleChange}/>}
            </form>
        </div>
    )
}
export  default  LoginFormik;