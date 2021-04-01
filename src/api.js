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
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use ProfileAPI object.');
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    setStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status) {
        return instance.put('profile/status', {status:status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email,password,rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}