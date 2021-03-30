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
                ...action.data, isAuth: true
            };
        }

        default:
            return state;
    }


}
export default authReducer;
export const setUserData = (data) => ({type: SET_USER_DATA, data:data});

export  const getAuthUserData = () =>{
    return (dispatch) =>{
        authAPI.me()
            .then(response => {

                    if (response.data.resultCode === 0) {
                        dispatch(setUserData(response.data.data));
                    }
                }
            );
    }
}