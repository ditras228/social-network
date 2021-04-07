import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export let initialStateAuth = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string|null
}

export type InitialStateType = typeof initialStateAuth;

const authReducer = (state = initialStateAuth, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data, isAuth: action.data.isAuth

            };
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl

            };
        }
        default:
            return state;
    }


}

type SetUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetUserDataType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataPayloadType
}
export const setUserData = (userId: number | null, email: string | null,
                            login: string | null, isAuth: boolean): SetUserDataType =>
    ({type: SET_USER_DATA, data: {userId, email, login, isAuth: isAuth}});

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let meData = await authAPI.me()

        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(setUserData(id, email, login, true));
        }
    }
}
export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) => {

    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }else if (response.data.resultCode===ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
    }
}
export const logout = () => {
    return async (dispatch: any) => {
        let response = await authAPI.logout()

        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(setUserData(null, null, null, false));

        }
    }
}
export const getCaptchaUrlSuccess=(captchaUrl: string)=>({
   type: GET_CAPTCHA_URL_SUCCESS, captchaUrl:captchaUrl
})
export const getCaptchaUrl =()=> { return async  (dispatch:any)=>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}}

export default authReducer;
