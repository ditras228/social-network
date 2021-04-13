import {GetItemsType, instance} from "./api";
import {FilterType} from "../redux/users-reducer";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: FilterType ) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term.term}&friend=${term.friend}`)
            .then(res =>  res.data
            )
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}