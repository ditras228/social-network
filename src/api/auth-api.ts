import {instance, APIResponseType} from './api';

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDate={
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`, {
            withCredentials: true
        }).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<APIResponseType<LoginResponseDate>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}