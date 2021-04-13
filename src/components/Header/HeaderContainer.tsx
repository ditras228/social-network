import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {getAuthUserData, logout } from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store'
type PropsType ={
    getAuthUserData: () => void
}
class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header data={this.props}/>
        )
    }

}
let mapStateToProps = (state: AppStateType) => {
    return {
        data: {
            userId: state.authReducer.userId,
            login: state.authReducer.login,
            email: state.authReducer.email,
            isAuth: state.authReducer.isAuth,
        }
    }
}
export default connect(mapStateToProps, { getAuthUserData, logout})(HeaderContainer);