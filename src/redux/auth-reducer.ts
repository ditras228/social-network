import {ResultCodeForCaptcha, ResultCodesEnum} from "../api/api";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/securityAPI-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

export let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;


const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA': {
            return {
                ...state,
                ...action.data, isAuth: action.data.isAuth

            };
        }
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS': {
            return {
                ...state,
                captchaUrl: action.captchaUrl

            };
        }
        default:
            return state;
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null,
                  login: string | null, isAuth: boolean) =>
        ({type: 'SN/auth/SET_USER_DATA', data: {userId, email, login, isAuth: isAuth}} as const),
     getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', captchaUrl: captchaUrl
    })

}
export const getAuthUserData= ():ThunkType => {
    return async (dispatch) => {
        let meData = await authAPI.me()

        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(actions.setUserData(id, email, login, true));
        }
    }
}


export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => {

    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
    }
}
export const logout = ():ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()

        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setUserData(null, null, null, false));

        }
    }
}

export const getCaptchaUrl = ():ThunkType => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.url
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
    }
}

export default authReducer;

export type InstallStateType =typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
