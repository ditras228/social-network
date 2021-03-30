import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withAutoRedirect} from "../hoc/withAutoRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage}/>
        )

    }

};

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})
export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAutoRedirect
)(ProfileContainer)

