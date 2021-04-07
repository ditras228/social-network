import axios from "axios";
import {ProfileType} from "./types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ae506d1a-c3bf-404f-8afd-e366c64d1f0b'
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number | null) {
        console.warn('Obsolete method. Please use ProfileAPI object.');
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number | null    ) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    setStatus(userId: number) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile/', profile)
    },
}
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type LoginResponseType = {
    data:{
        userId: number
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`, {
            withCredentials: true
        }).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url')
    }
}