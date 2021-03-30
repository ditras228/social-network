import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header data={this.props}/>
        )
    }

}
;
let mapStateToProps = (state) => {
    console.log(state.authReducer)
    return {
        data: {
            userId: state.authReducer.id,
            login: state.authReducer.login,
            email: state.authReducer.email,
            isAuth: state.authReducer.isAuth,
        }
    }
}
export default connect(mapStateToProps, {setUserData, getAuthUserData})(HeaderContainer);