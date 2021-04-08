import axios from "axios";
import {PhotosType, UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ae506d1a-c3bf-404f-8afd-e366c64d1f0b'
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null

}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    message: Array<String>
    resultCode: RC
}