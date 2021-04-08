import {Action, applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import appReducer from './app-reducer'

export let rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        authReducer:authReducer,
        app:appReducer,

    }
)
export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U: never
export type InferActionsTypes
    <T extends {[key: string]: (...args: any[])=> any}> = ReturnType<PropertiesType<T>>
export type BaseThunkType
        <A extends Action, R= Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store