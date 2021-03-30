import {messageSendCreactor, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAutoRedirect} from './../hoc/withAutoRedirect'
import {compose} from "redux";
let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
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
export default compose(
    connect(mapStateToProps, dispatchToProps),
    withAutoRedirect
)(Dialogs);