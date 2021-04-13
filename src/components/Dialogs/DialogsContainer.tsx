import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAutoRedirect} from '../hoc/withAutoRedirect'
import {compose} from "redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {

    return {
        dialogsPage: state.dialogsPage,
    }
}
let dispatchToProps = (dispatch: any) => {
    return {
        messageSend: (text: string) => {
            dispatch(actions.messageSendCreator(text));
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatchToProps),
    withAutoRedirect
)(Dialogs);