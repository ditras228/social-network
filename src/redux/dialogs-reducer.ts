const MESSAGE_SEND = 'MESSAGE-SEND'

type DialogsType= {
    id: number,
    name: string
}
type MessageType={
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

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case MESSAGE_SEND: {
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
type MessageSendCreatorActionType = {
    type: typeof MESSAGE_SEND,
    text: string
}

export const messageSendCreator = (text:string):MessageSendCreatorActionType =>
    ({type: MESSAGE_SEND, text: text})

export default dialogsReducer
