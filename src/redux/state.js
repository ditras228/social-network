import {rerender} from "../render";

let state={
    dialogsPage:{
        dialogs:[
            {id:1, name: 'dmitry'},
            {id:2, name: 'vaider'},
            {id:3, name: 'alex'}
        ],
        messages: [
            {id:1, message: 'hi'},
            {id:2, message: 'how are you'},
            {id:3, message: 'yo'}
        ],
    },
    profilePage:{
        posts: [
            {id: 1, name: 'dmitry'},
            {id: 2, name: 'vaider'},
            {id: 3, name: 'alex'}
        ]
    }
}
export let addPost = (postMessage)=>{
    let newPost={
        id:4,
        name: 'test',
        comment: postMessage
    }
    state.profilePage.posts.push(newPost);
    rerender(state);
}

export default state;