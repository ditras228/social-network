import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponseType} from "./api";

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res=> res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res=>res.data)
    },
    setStatus(userId: number) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>('profile/status', {status: status})
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<APIResponseType<SavePhotoResponseType>>('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>('profile/', profile).then(res=>res.data)
    },
}

type SavePhotoResponseType = {
    photos: PhotosType
}