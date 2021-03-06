import {InferActionsTypes} from "./redux-store"
import {getAuthUserData} from "./auth-reducer"

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}
const actions = {
      initializeSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}
export const initializeApp = () =>
    (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(actions.initializeSuccess())
        })
    }
export default appReducer;

export type InitialStateType=typeof initialState
type ActionsType =  InferActionsTypes<typeof actions>