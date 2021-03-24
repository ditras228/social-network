const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState={
    posts: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ],
    newPostText: ''
}
const profileReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'test',
                text: state.newPostText,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;
export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostText= (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})