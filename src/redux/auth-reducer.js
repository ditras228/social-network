import {authAPI} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
    isAuth: false



}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.data, isAuth: action.isAuth
            };
        }

        default:
            return state;
    }


}
export default authReducer;
export const setUserData = (data,isAuth) => ({type: SET_USER_DATA, data:data, isAuth:isAuth });

export  const getAuthUserData = () =>{
    return (dispatch) =>{
        authAPI.me()
            .then(response => {

                    if (response.data.resultCode === 0) {
                        dispatch(setUserData(response.data.data, true));
                    }
                }
            );
    }
}
export  const login = (email, password, rememberMe) =>{

    return (dispatch) =>{
        authAPI.login(email, password,rememberMe )
            .then(response => {

                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserData())
                    }

                }
            );
    }
}
export  const logout = () =>{
    return (dispatch) =>{
        authAPI.logout()
            .then(response => {

                    if (response.data.resultCode === 0) {
                        dispatch(setUserData(null, false));
                    }
                }
            );
    }
}