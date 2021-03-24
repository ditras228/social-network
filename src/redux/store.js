import {rerenderEntireTree} from "./../index";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, name: 'dmitry'},
                {id: 2, name: 'vaider'},
                {id: 3, name: 'alex'}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        rerenderEntireTree();
    }
}
