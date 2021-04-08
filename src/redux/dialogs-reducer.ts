import {BaseThunkType, InferActionsTypes} from "./redux-store";

type DialogsType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    text: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, text: 'hi'},
        {id: 2, text: 'how   are you'},

    ] as Array<MessageType>
}



export const actions = {
    messageSendCreator: (text: string) =>
        ({type: 'MESSAGE_SEND', text: text})
}
const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'MESSAGE_SEND': {
            let newMessage = {
                id: 4,
                text: action.text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state
    }


}
export default dialogsReducer

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>
