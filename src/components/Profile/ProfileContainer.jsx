import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus} from "../../redux/profile-reducer";
import {withAutoRedirect} from "../hoc/withAutoRedirect";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status}/>
        )

    }

};

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,
    userId: state.authReducer.id,
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, getAuthUserData}),
    withRouter,
    withAutoRedirect
)(ProfileContainer)

