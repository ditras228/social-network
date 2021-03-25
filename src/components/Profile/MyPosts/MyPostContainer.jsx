import {addPostCreator, updateNewPostText} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let dispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updatePostText: (text) => {
            dispatch(updateNewPostText(text));
        }
    }
}
const MyPostContainer = connect(mapStateToProps, dispatchToProps)(MyPost);
export default MyPostContainer;