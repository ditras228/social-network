const MESSAGE_SEND = 'MESSAGE-SEND';
let initialState = {
    dialogs: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ],
    messages: [
        {id: 1, text: 'hi'},
        {id: 2, text: 'how are you'},

    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_SEND: {
            let newMessage = {
                id: 4,
                text: action.text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }


}
export default dialogsReducer;
export const messageSendCreator = (text) => ({type: MESSAGE_SEND, text: text});