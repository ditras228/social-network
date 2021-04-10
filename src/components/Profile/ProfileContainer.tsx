import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {getProfile, getStatus, savePhoto, saveProfile} from "../../redux/profile-reducer"
import {withAutoRedirect} from "../hoc/withAutoRedirect"
import {compose} from "redux"
import {getAuthUserData} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
type DispatchPropsType = {
    getProfile: (userId:number)=>void
    getStatus: (userId:number)=>void
    getAuthUserData: ()=>void
    savePhoto: ()=>Promise<any>
    saveProfile: ()=>Promise<any>
    profilePage: ProfileType
}
type PathParamsType={
    userId: string
}

type PropsType = PathParamsType & DispatchPropsType
    & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType>   {
    refreshProfile() {
        let userId: number| null = +this.props.match.params.userId;
        if (!userId) {
            userId = parseInt(this.props.userId);
        }
        this.props.getProfile(userId as number);
        this.props.getStatus(userId as number);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState:PropsType) {
        if(this.props.match.params.userId!== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage}
                     savePhoto = {this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}
                     saveProfile={this.props.saveProfile}
    />
        )

    }

};

let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,
    userId: state.authReducer.userId,
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, getAuthUserData, savePhoto, saveProfile}),
    withRouter,
    withAutoRedirect
)(ProfileContainer)

