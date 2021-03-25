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
        case ADD_POST: {
            let newPost = {
                id: 4,
                name: 'test',
                text: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}
export default profileReducer;
export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostText= (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})