import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ae506d1a-c3bf-404f-8afd-e366c64d1f0b'
    }
})
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    }
}
export const authAPI={
    me(){
         return instance.get(`/auth/me`,{
            withCredentials: true
        })
    }
}