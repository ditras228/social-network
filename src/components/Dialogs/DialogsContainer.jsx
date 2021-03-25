import {messageSendCreactor, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let dispatchToProps = (dispatch) => {
    return {
        messageSend: () => {
            dispatch(messageSendCreactor());
        },
        updateMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }

    }
}
const DialogsContainer = connect(mapStateToProps, dispatchToProps)(Dialogs);
export default DialogsContainer;