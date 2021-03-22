import {rerender} from "./../index";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const MESSAGE_POST = 'MESSAGE-POST';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'dmitry'},
                {id: 2, name: 'vaider'},
                {id: 3, name: 'alex'}
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you'},
                {id: 3, message: 'yo'}
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

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 4,
                name: 'test',
                comment: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            rerender(this._state)
        }
        else if (action.type===UPDATE_POST_TEXT){
            this._state.profilePage.newPostText =   action.newText;
            rerender(this._state);
        }
        else if(action.type===MESSAGE_POST){
            let newMessage = {
                id:4,
                message:  this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText='';
            rerender(this._state);
        }
        else if(action.type===UPDATE_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            rerender(this._state);
        }
    }
}