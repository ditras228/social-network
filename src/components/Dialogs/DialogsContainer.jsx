import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
    import {withAutoRedirect} from './../hoc/withAutoRedirect'
import {compose} from "redux";
let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let dispatchToProps = (dispatch) => {
    return {
        messageSend: (text) => {
            dispatch(actions.messageSendCreator(text));
        }
    }
}
export default compose(
    connect(mapStateToProps, dispatchToProps),
    withAutoRedirect
)(Dialogs);