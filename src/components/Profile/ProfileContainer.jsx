import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {withAutoRedirect} from "../hoc/withAutoRedirect";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId!== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage}
                     status={this.props.status} savePhoto = {this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}
                     saveProfile={this.props.saveProfile}
    />
        )

    }

};

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,
    userId: state.authReducer.userId,
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, getAuthUserData, savePhoto, saveProfile}),
    withRouter,
    withAutoRedirect
)(ProfileContainer)

