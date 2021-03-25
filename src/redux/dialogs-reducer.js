const MESSAGE_SEND = 'MESSAGE-SEND';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let initialState={
        dialogs: [
            {id: 1, name: 'dmitry'},
            {id: 2, name: 'vaider'},
            {id: 3, name: 'alex'}
        ],
        messages: [
            {id: 1, text: 'hi'},
            {id: 2, text: 'how are you'},
            {id: 3, text: 'yo'}
        ],
        newMessageText: 'ss'
}
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case MESSAGE_SEND: {
            let newMessage = {
                id: 4,
                text: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageTex: action.newText

            };
        }
        default:
            return state;
    }


}
export default dialogsReducer;
export const messageSendCreactor = () => ({type: MESSAGE_SEND});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,newText: text});